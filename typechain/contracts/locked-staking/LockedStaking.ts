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

export interface LockedStakingInterface extends utils.Interface {
  functions: {
    "addBurner(address)": FunctionFragment;
    "addOwner(address)": FunctionFragment;
    "addPauser(address)": FunctionFragment;
    "addValidator(address)": FunctionFragment;
    "claim(uint256)": FunctionFragment;
    "getClaimableStake(address)": FunctionFragment;
    "getLockedStake(address,bytes32)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isBurner(address)": FunctionFragment;
    "isOwner(address)": FunctionFragment;
    "isPauser(address)": FunctionFragment;
    "isValidator(address)": FunctionFragment;
    "lockStake(bytes32,uint256)": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "preStake(uint256)": FunctionFragment;
    "removeBurner(address)": FunctionFragment;
    "removeOwner(address)": FunctionFragment;
    "removePauser(address)": FunctionFragment;
    "removeValidator(address)": FunctionFragment;
    "slash(address,bytes32,uint256)": FunctionFragment;
    "unlockStake(address,bytes32,uint256,uint256)": FunctionFragment;
    "unpause()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addBurner"
      | "addOwner"
      | "addPauser"
      | "addValidator"
      | "claim"
      | "getClaimableStake"
      | "getLockedStake"
      | "initialize"
      | "isBurner"
      | "isOwner"
      | "isPauser"
      | "isValidator"
      | "lockStake"
      | "pause"
      | "paused"
      | "preStake"
      | "removeBurner"
      | "removeOwner"
      | "removePauser"
      | "removeValidator"
      | "slash"
      | "unlockStake"
      | "unpause"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "addBurner", values: [string]): string;
  encodeFunctionData(functionFragment: "addOwner", values: [string]): string;
  encodeFunctionData(functionFragment: "addPauser", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addValidator",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "claim", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "getClaimableStake",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLockedStake",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(functionFragment: "isBurner", values: [string]): string;
  encodeFunctionData(functionFragment: "isOwner", values: [string]): string;
  encodeFunctionData(functionFragment: "isPauser", values: [string]): string;
  encodeFunctionData(functionFragment: "isValidator", values: [string]): string;
  encodeFunctionData(
    functionFragment: "lockStake",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "preStake",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeBurner",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "removeOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removePauser",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeValidator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "slash",
    values: [string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockStake",
    values: [string, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;

  decodeFunctionResult(functionFragment: "addBurner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addPauser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getClaimableStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLockedStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isBurner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPauser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lockStake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "preStake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeBurner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removePauser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "slash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unlockStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;

  events: {
    "BurnerAdded(address,address)": EventFragment;
    "BurnerRemoved(address,address)": EventFragment;
    "Claimed(address,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "Lock(address,bytes32,uint256)": EventFragment;
    "OwnerAdded(address,address)": EventFragment;
    "OwnerRemoved(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "PauserAdded(address,address)": EventFragment;
    "PauserRemoved(address,address)": EventFragment;
    "Slashed(address,bytes32,uint256)": EventFragment;
    "Staked(address,uint256)": EventFragment;
    "Unlock(address,bytes32,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
    "ValidatorAdded(address,address)": EventFragment;
    "ValidatorRemoved(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BurnerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BurnerRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Lock"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PauserAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PauserRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Slashed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unlock"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ValidatorAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ValidatorRemoved"): EventFragment;
}

export interface BurnerAddedEventObject {
  addedBurner: string;
  addedBy: string;
}
export type BurnerAddedEvent = TypedEvent<
  [string, string],
  BurnerAddedEventObject
>;

export type BurnerAddedEventFilter = TypedEventFilter<BurnerAddedEvent>;

export interface BurnerRemovedEventObject {
  removedBurner: string;
  removedBy: string;
}
export type BurnerRemovedEvent = TypedEvent<
  [string, string],
  BurnerRemovedEventObject
>;

export type BurnerRemovedEventFilter = TypedEventFilter<BurnerRemovedEvent>;

export interface ClaimedEventObject {
  account: string;
  amount: BigNumber;
}
export type ClaimedEvent = TypedEvent<[string, BigNumber], ClaimedEventObject>;

export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface LockEventObject {
  account: string;
  hash: string;
  amount: BigNumber;
}
export type LockEvent = TypedEvent<
  [string, string, BigNumber],
  LockEventObject
>;

export type LockEventFilter = TypedEventFilter<LockEvent>;

export interface OwnerAddedEventObject {
  addedOwner: string;
  addedBy: string;
}
export type OwnerAddedEvent = TypedEvent<
  [string, string],
  OwnerAddedEventObject
>;

export type OwnerAddedEventFilter = TypedEventFilter<OwnerAddedEvent>;

export interface OwnerRemovedEventObject {
  removedOwner: string;
  removedBy: string;
}
export type OwnerRemovedEvent = TypedEvent<
  [string, string],
  OwnerRemovedEventObject
>;

export type OwnerRemovedEventFilter = TypedEventFilter<OwnerRemovedEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface PauserAddedEventObject {
  addedPauser: string;
  addedBy: string;
}
export type PauserAddedEvent = TypedEvent<
  [string, string],
  PauserAddedEventObject
>;

export type PauserAddedEventFilter = TypedEventFilter<PauserAddedEvent>;

export interface PauserRemovedEventObject {
  removedPauser: string;
  removedBy: string;
}
export type PauserRemovedEvent = TypedEvent<
  [string, string],
  PauserRemovedEventObject
>;

export type PauserRemovedEventFilter = TypedEventFilter<PauserRemovedEvent>;

export interface SlashedEventObject {
  account: string;
  hash: string;
  amount: BigNumber;
}
export type SlashedEvent = TypedEvent<
  [string, string, BigNumber],
  SlashedEventObject
>;

export type SlashedEventFilter = TypedEventFilter<SlashedEvent>;

export interface StakedEventObject {
  account: string;
  amount: BigNumber;
}
export type StakedEvent = TypedEvent<[string, BigNumber], StakedEventObject>;

export type StakedEventFilter = TypedEventFilter<StakedEvent>;

export interface UnlockEventObject {
  account: string;
  hash: string;
  rewardedAmount: BigNumber;
}
export type UnlockEvent = TypedEvent<
  [string, string, BigNumber],
  UnlockEventObject
>;

export type UnlockEventFilter = TypedEventFilter<UnlockEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface ValidatorAddedEventObject {
  addedValidator: string;
  addedBy: string;
}
export type ValidatorAddedEvent = TypedEvent<
  [string, string],
  ValidatorAddedEventObject
>;

export type ValidatorAddedEventFilter = TypedEventFilter<ValidatorAddedEvent>;

export interface ValidatorRemovedEventObject {
  removedValidator: string;
  removedBy: string;
}
export type ValidatorRemovedEvent = TypedEvent<
  [string, string],
  ValidatorRemovedEventObject
>;

export type ValidatorRemovedEventFilter =
  TypedEventFilter<ValidatorRemovedEvent>;

export interface LockedStaking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LockedStakingInterface;

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
    addBurner(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addOwner(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addPauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addValidator(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claim(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getClaimableStake(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getLockedStake(
      account: string,
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialize(
      goldenTokenContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isBurner(account: string, overrides?: CallOverrides): Promise<[boolean]>;

    isOwner(account: string, overrides?: CallOverrides): Promise<[boolean]>;

    isPauser(account: string, overrides?: CallOverrides): Promise<[boolean]>;

    isValidator(account: string, overrides?: CallOverrides): Promise<[boolean]>;

    lockStake(
      hash: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    preStake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeBurner(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeOwner(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removePauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeValidator(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    slash(
      account: string,
      hash: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unlockStake(
      account: string,
      hash: BytesLike,
      amount: BigNumberish,
      reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addBurner(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addOwner(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addPauser(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addValidator(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claim(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getClaimableStake(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getLockedStake(
    account: string,
    hash: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialize(
    goldenTokenContractAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isBurner(account: string, overrides?: CallOverrides): Promise<boolean>;

  isOwner(account: string, overrides?: CallOverrides): Promise<boolean>;

  isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;

  isValidator(account: string, overrides?: CallOverrides): Promise<boolean>;

  lockStake(
    hash: BytesLike,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  preStake(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeBurner(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeOwner(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removePauser(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeValidator(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  slash(
    account: string,
    hash: BytesLike,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unlockStake(
    account: string,
    hash: BytesLike,
    amount: BigNumberish,
    reward: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addBurner(account: string, overrides?: CallOverrides): Promise<void>;

    addOwner(account: string, overrides?: CallOverrides): Promise<void>;

    addPauser(account: string, overrides?: CallOverrides): Promise<void>;

    addValidator(account: string, overrides?: CallOverrides): Promise<void>;

    claim(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getClaimableStake(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLockedStake(
      account: string,
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      goldenTokenContractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isBurner(account: string, overrides?: CallOverrides): Promise<boolean>;

    isOwner(account: string, overrides?: CallOverrides): Promise<boolean>;

    isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;

    isValidator(account: string, overrides?: CallOverrides): Promise<boolean>;

    lockStake(
      hash: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    preStake(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    removeBurner(account: string, overrides?: CallOverrides): Promise<void>;

    removeOwner(account: string, overrides?: CallOverrides): Promise<void>;

    removePauser(account: string, overrides?: CallOverrides): Promise<void>;

    removeValidator(account: string, overrides?: CallOverrides): Promise<void>;

    slash(
      account: string,
      hash: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unlockStake(
      account: string,
      hash: BytesLike,
      amount: BigNumberish,
      reward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "BurnerAdded(address,address)"(
      addedBurner?: string | null,
      addedBy?: string | null
    ): BurnerAddedEventFilter;
    BurnerAdded(
      addedBurner?: string | null,
      addedBy?: string | null
    ): BurnerAddedEventFilter;

    "BurnerRemoved(address,address)"(
      removedBurner?: string | null,
      removedBy?: string | null
    ): BurnerRemovedEventFilter;
    BurnerRemoved(
      removedBurner?: string | null,
      removedBy?: string | null
    ): BurnerRemovedEventFilter;

    "Claimed(address,uint256)"(
      account?: string | null,
      amount?: null
    ): ClaimedEventFilter;
    Claimed(account?: string | null, amount?: null): ClaimedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "Lock(address,bytes32,uint256)"(
      account?: null,
      hash?: BytesLike | null,
      amount?: null
    ): LockEventFilter;
    Lock(
      account?: null,
      hash?: BytesLike | null,
      amount?: null
    ): LockEventFilter;

    "OwnerAdded(address,address)"(
      addedOwner?: string | null,
      addedBy?: string | null
    ): OwnerAddedEventFilter;
    OwnerAdded(
      addedOwner?: string | null,
      addedBy?: string | null
    ): OwnerAddedEventFilter;

    "OwnerRemoved(address,address)"(
      removedOwner?: string | null,
      removedBy?: string | null
    ): OwnerRemovedEventFilter;
    OwnerRemoved(
      removedOwner?: string | null,
      removedBy?: string | null
    ): OwnerRemovedEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "PauserAdded(address,address)"(
      addedPauser?: string | null,
      addedBy?: string | null
    ): PauserAddedEventFilter;
    PauserAdded(
      addedPauser?: string | null,
      addedBy?: string | null
    ): PauserAddedEventFilter;

    "PauserRemoved(address,address)"(
      removedPauser?: string | null,
      removedBy?: string | null
    ): PauserRemovedEventFilter;
    PauserRemoved(
      removedPauser?: string | null,
      removedBy?: string | null
    ): PauserRemovedEventFilter;

    "Slashed(address,bytes32,uint256)"(
      account?: null,
      hash?: BytesLike | null,
      amount?: null
    ): SlashedEventFilter;
    Slashed(
      account?: null,
      hash?: BytesLike | null,
      amount?: null
    ): SlashedEventFilter;

    "Staked(address,uint256)"(
      account?: string | null,
      amount?: null
    ): StakedEventFilter;
    Staked(account?: string | null, amount?: null): StakedEventFilter;

    "Unlock(address,bytes32,uint256)"(
      account?: null,
      hash?: BytesLike | null,
      rewardedAmount?: null
    ): UnlockEventFilter;
    Unlock(
      account?: null,
      hash?: BytesLike | null,
      rewardedAmount?: null
    ): UnlockEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "ValidatorAdded(address,address)"(
      addedValidator?: string | null,
      addedBy?: string | null
    ): ValidatorAddedEventFilter;
    ValidatorAdded(
      addedValidator?: string | null,
      addedBy?: string | null
    ): ValidatorAddedEventFilter;

    "ValidatorRemoved(address,address)"(
      removedValidator?: string | null,
      removedBy?: string | null
    ): ValidatorRemovedEventFilter;
    ValidatorRemoved(
      removedValidator?: string | null,
      removedBy?: string | null
    ): ValidatorRemovedEventFilter;
  };

  estimateGas: {
    addBurner(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addOwner(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addPauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addValidator(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claim(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getClaimableStake(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLockedStake(
      account: string,
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      goldenTokenContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isBurner(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    isPauser(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    isValidator(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    lockStake(
      hash: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    preStake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeBurner(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeOwner(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removePauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeValidator(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    slash(
      account: string,
      hash: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unlockStake(
      account: string,
      hash: BytesLike,
      amount: BigNumberish,
      reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addBurner(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addOwner(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addPauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addValidator(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claim(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getClaimableStake(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLockedStake(
      account: string,
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      goldenTokenContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isBurner(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOwner(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPauser(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidator(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockStake(
      hash: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    preStake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeBurner(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeOwner(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removePauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeValidator(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    slash(
      account: string,
      hash: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unlockStake(
      account: string,
      hash: BytesLike,
      amount: BigNumberish,
      reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}