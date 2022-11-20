import { Contracts as _Contracts, User } from '../utils';
import { toBN } from '../../utils/number.utils';

export type GoldenToken = Pick<_Contracts, 'GoldenToken'>;
export type LockedStaking = Pick<_Contracts, 'LockedStaking'>;

export type Contracts = {
  GoldenToken: GoldenToken['GoldenToken'];
  LockedStaking: LockedStaking['LockedStaking'];
};

export class LockStakeBuilder {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private owner?: User<Contracts>,
    private verifier?: User<Contracts>,
    private validator?: User<Contracts>,
    private pauser?: User<Contracts>,
    private minter?: User<Contracts>,
    private burner?: User<Contracts>,
    private hash?: string,
    private LockedStaking?: Contracts['LockedStaking']
  ) {}

  setLockedStaking(_lockedStaking: Contracts['LockedStaking']) {
    this.LockedStaking = _lockedStaking;
    return this;
  }

  setVerifier(_verifier: User<Contracts>) {
    this.verifier = _verifier;
    return this;
  }

  setOwner(_owner: User<Contracts>) {
    this.owner = _owner;
    return this;
  }

  setHash(_hash: string) {
    this.hash = _hash;
    return this;
  }

  setValidator(_validator: User<Contracts>) {
    this.validator = _validator;
    return this;
  }

  setPauser(_pauser: User<Contracts>) {
    this.pauser = _pauser;
    return this;
  }

  setMinter(_minter: User<Contracts>) {
    this.minter = _minter;
    return this;
  }

  setBurner(_burner: User<Contracts>) {
    this.burner = _burner;
    return this;
  }

  build() {
    return new LockStakeBuilder(
      this.owner,
      this.verifier,
      this.validator,
      this.pauser,
      this.minter,
      this.burner,
      this.hash,
      this.LockedStaking
    );
  }

  getVerifier() {
    return this.verifier as User<Contracts>;
  }

  getOwner() {
    return this.owner as User<Contracts>;
  }

  getLockedStakingSmartContract() {
    return this.LockedStaking as Contracts['LockedStaking'];
  }

  getHash() {
    return this.hash as string;
  }

  getValidator() {
    return this.validator as User<Contracts>;
  }

  getPauser() {
    return this.pauser as User<Contracts>;
  }

  getMinter() {
    return this.minter as User<Contracts>;
  }

  getBurner() {
    return this.burner as User<Contracts>;
  }

  addValidatorRole(_address?: string) {
    const address = this.or(this.getValidator().address, _address);
    return this.getOwner().LockedStaking.addValidator(address);
  }

  addMinterRole(_address?: string) {
    const address = this.or(this.getValidator().address, _address);
    return this.getOwner().GoldenToken.addMinter(address);
  }

  addBurnerRole(_address?: string) {
    const address = this.or(this.getValidator().address, _address);
    return this.getOwner().GoldenToken.addBurner(address);
  }

  addPauserRole(_address?: string) {
    const address = this.or(this.getPauser().address, _address);
    return this.getOwner().LockedStaking.addPauser(address);
  }

  async pause() {
    return this.getPauser().LockedStaking.pause();
  }

  async isPaused() {
    return this.getPauser().LockedStaking.paused();
  }

  private or<T extends string>(statement: T, arg?: T): T {
    return arg ?? statement;
  }

  async getBalance(_address?: string) {
    const address = this.or(this.getVerifier().address, _address);
    return this.getVerifier().GoldenToken.balanceOf(address);
  }

  async mint(amount: string | number, _address?: string) {
    const address = this.or<string>(this.getVerifier().address, _address);
    await this.getOwner().GoldenToken.mint(address, toBN(amount));
    return await this.getBalance();
  }

  async allowance(_address?: string) {
    const address = this.or<string>(this.getVerifier().address, _address);
    return this.getVerifier().GoldenToken.allowance(
      address,
      this.getLockedStakingSmartContract().address
    );
  }

  async approve(amount: string | number) {
    await this.getVerifier().GoldenToken.approve(
      this.getLockedStakingSmartContract().address,
      toBN(amount)
    );
    return await this.allowance();
  }

  async preStake(amount: string | number) {
    await this.getVerifier().LockedStaking.preStake(amount);
  }

  async lockStake(amount: string | number, _hash?: string) {
    const hash = this.or(this.getHash(), _hash);
    return await this.getVerifier().LockedStaking.lockStake(hash, toBN(amount));
  }

  async getLockedStake(_address?: string, _hash?: string) {
    const address = this.or(this.getVerifier().address, _address);
    const hash = this.or(this.getHash(), _hash);

    return await this.getLockedStakingSmartContract().getLockedStake(
      address,
      hash
    );
  }

  async prepare(mintAmount: string | number, approvalAmount: string | number) {
    return {
      balance: await this.mint(mintAmount),
      allowance: await this.approve(approvalAmount),
    };
  }

  async getClaimableStake(account?: string) {
    const addr = account ?? this.getVerifier().address;
    return this.getLockedStakingSmartContract().getClaimableStake(addr);
  }

  async unlockStake(
    amount: string | number,
    reward: string | number,
    account?: string
  ) {
    const addr = account ?? this.getVerifier().address;
    return await this.getValidator().LockedStaking.unlockStake(
      addr,
      this.getHash(),
      toBN(amount),
      toBN(reward)
    );
  }

  async slash(address: string, amount: string | number, hash?: string) {
    return this.getValidator().LockedStaking.slash(
      address,
      this.or(this.getHash(), hash),
      toBN(amount)
    );
  }

  async claim(amount: string | number) {
    return this.getVerifier().LockedStaking.claim(toBN(amount));
  }
}