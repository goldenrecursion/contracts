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
} from "../../common";

export interface IGoldenStakingInterface extends utils.Interface {
  functions: {
    "recoverERC20(address)": FunctionFragment;
    "setMinimumStaking(uint256)": FunctionFragment;
    "setStakingPeriod(uint256)": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "recoverERC20"
      | "setMinimumStaking"
      | "setStakingPeriod"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "recoverERC20",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinimumStaking",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setStakingPeriod",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "recoverERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinimumStaking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStakingPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "MinimumStakingChanged(uint256)": EventFragment;
    "Received(address,uint256,uint256)": EventFragment;
    "StakingPeriodChanged(uint256)": EventFragment;
    "TokensRecovered(address,uint256)": EventFragment;
    "Withdrawn(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MinimumStakingChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Received"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakingPeriodChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensRecovered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export interface MinimumStakingChangedEventObject {
  minimumStaking: BigNumber;
}
export type MinimumStakingChangedEvent = TypedEvent<
  [BigNumber],
  MinimumStakingChangedEventObject
>;

export type MinimumStakingChangedEventFilter =
  TypedEventFilter<MinimumStakingChangedEvent>;

export interface ReceivedEventObject {
  account: string;
  amount: BigNumber;
  lockedUntil: BigNumber;
}
export type ReceivedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  ReceivedEventObject
>;

export type ReceivedEventFilter = TypedEventFilter<ReceivedEvent>;

export interface StakingPeriodChangedEventObject {
  stakingPeriod: BigNumber;
}
export type StakingPeriodChangedEvent = TypedEvent<
  [BigNumber],
  StakingPeriodChangedEventObject
>;

export type StakingPeriodChangedEventFilter =
  TypedEventFilter<StakingPeriodChangedEvent>;

export interface TokensRecoveredEventObject {
  tokenAddress: string;
  amount: BigNumber;
}
export type TokensRecoveredEvent = TypedEvent<
  [string, BigNumber],
  TokensRecoveredEventObject
>;

export type TokensRecoveredEventFilter = TypedEventFilter<TokensRecoveredEvent>;

export interface WithdrawnEventObject {
  account: string;
  amount: BigNumber;
}
export type WithdrawnEvent = TypedEvent<
  [string, BigNumber],
  WithdrawnEventObject
>;

export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;

export interface IGoldenStaking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGoldenStakingInterface;

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
    recoverERC20(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinimumStaking(
      minimumStaking: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStakingPeriod(
      stakingPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  recoverERC20(
    tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinimumStaking(
    minimumStaking: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStakingPeriod(
    stakingPeriod: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    recoverERC20(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinimumStaking(
      minimumStaking: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setStakingPeriod(
      stakingPeriod: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "MinimumStakingChanged(uint256)"(
      minimumStaking?: null
    ): MinimumStakingChangedEventFilter;
    MinimumStakingChanged(
      minimumStaking?: null
    ): MinimumStakingChangedEventFilter;

    "Received(address,uint256,uint256)"(
      account?: string | null,
      amount?: null,
      lockedUntil?: null
    ): ReceivedEventFilter;
    Received(
      account?: string | null,
      amount?: null,
      lockedUntil?: null
    ): ReceivedEventFilter;

    "StakingPeriodChanged(uint256)"(
      stakingPeriod?: null
    ): StakingPeriodChangedEventFilter;
    StakingPeriodChanged(stakingPeriod?: null): StakingPeriodChangedEventFilter;

    "TokensRecovered(address,uint256)"(
      tokenAddress?: null,
      amount?: null
    ): TokensRecoveredEventFilter;
    TokensRecovered(
      tokenAddress?: null,
      amount?: null
    ): TokensRecoveredEventFilter;

    "Withdrawn(address,uint256)"(
      account?: string | null,
      amount?: null
    ): WithdrawnEventFilter;
    Withdrawn(account?: string | null, amount?: null): WithdrawnEventFilter;
  };

  estimateGas: {
    recoverERC20(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinimumStaking(
      minimumStaking: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStakingPeriod(
      stakingPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    recoverERC20(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinimumStaking(
      minimumStaking: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStakingPeriod(
      stakingPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
