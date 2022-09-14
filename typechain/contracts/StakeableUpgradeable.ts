/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface StakeableUpgradeableInterface extends utils.Interface {
  functions: {
    "_slash(address,uint256)": FunctionFragment;
    "_stakeOf(address)": FunctionFragment;
    "_unstake(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_slash"
      | "_stakeOf"
      | "_unstake"
      | "owner"
      | "renounceOwnership"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_slash",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "_stakeOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "_unstake",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "_slash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_stakeOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_unstake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Slashed(address,uint256)": EventFragment;
    "Staked(address,uint256)": EventFragment;
    "UnStaked(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Slashed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnStaked"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SlashedEventObject {
  user: string;
  amount: BigNumber;
}
export type SlashedEvent = TypedEvent<[string, BigNumber], SlashedEventObject>;

export type SlashedEventFilter = TypedEventFilter<SlashedEvent>;

export interface StakedEventObject {
  user: string;
  amount: BigNumber;
}
export type StakedEvent = TypedEvent<[string, BigNumber], StakedEventObject>;

export type StakedEventFilter = TypedEventFilter<StakedEvent>;

export interface UnStakedEventObject {
  user: string;
  amount: BigNumber;
}
export type UnStakedEvent = TypedEvent<
  [string, BigNumber],
  UnStakedEventObject
>;

export type UnStakedEventFilter = TypedEventFilter<UnStakedEvent>;

export interface StakeableUpgradeable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StakeableUpgradeableInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _slash(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _stakeOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    _unstake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _slash(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _stakeOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  _unstake(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _slash(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    _stakeOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    _unstake(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Slashed(address,uint256)"(
      user?: string | null,
      amount?: null
    ): SlashedEventFilter;
    Slashed(user?: string | null, amount?: null): SlashedEventFilter;

    "Staked(address,uint256)"(
      user?: string | null,
      amount?: null
    ): StakedEventFilter;
    Staked(user?: string | null, amount?: null): StakedEventFilter;

    "UnStaked(address,uint256)"(
      user?: string | null,
      amount?: null
    ): UnStakedEventFilter;
    UnStaked(user?: string | null, amount?: null): UnStakedEventFilter;
  };

  estimateGas: {
    _slash(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _stakeOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    _unstake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _slash(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _stakeOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _unstake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
