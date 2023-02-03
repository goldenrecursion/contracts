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

export interface IPayoutsControllerInterface extends utils.Interface {
  functions: {
    "addMerkleRoot(bytes32)": FunctionFragment;
    "claim(uint256,uint256,address,uint256,bytes32[])": FunctionFragment;
    "getLastEpoch()": FunctionFragment;
    "getMerkleRoot(uint256)": FunctionFragment;
    "getToken()": FunctionFragment;
    "isClaimed(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addMerkleRoot"
      | "claim"
      | "getLastEpoch"
      | "getMerkleRoot"
      | "getToken"
      | "isClaimed"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addMerkleRoot",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [BigNumberish, BigNumberish, string, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMerkleRoot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isClaimed",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addMerkleRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLastEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMerkleRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isClaimed", data: BytesLike): Result;

  events: {
    "Claimed(uint256,uint256,address,uint256)": EventFragment;
    "MerkleRootAdded(uint256,bytes32)": EventFragment;
    "RewardPricesChanged(uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MerkleRootAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardPricesChanged"): EventFragment;
}

export interface ClaimedEventObject {
  epochId: BigNumber;
  index: BigNumber;
  account: string;
  amount: BigNumber;
}
export type ClaimedEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber],
  ClaimedEventObject
>;

export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;

export interface MerkleRootAddedEventObject {
  newEpochId: BigNumber;
  merkleRoot: string;
}
export type MerkleRootAddedEvent = TypedEvent<
  [BigNumber, string],
  MerkleRootAddedEventObject
>;

export type MerkleRootAddedEventFilter = TypedEventFilter<MerkleRootAddedEvent>;

export interface RewardPricesChangedEventObject {
  rewardPrices: BigNumber[];
}
export type RewardPricesChangedEvent = TypedEvent<
  [BigNumber[]],
  RewardPricesChangedEventObject
>;

export type RewardPricesChangedEventFilter =
  TypedEventFilter<RewardPricesChangedEvent>;

export interface IPayoutsController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPayoutsControllerInterface;

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
    addMerkleRoot(
      merkleRoot: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claim(
      epochId: BigNumberish,
      index: BigNumberish,
      account: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getLastEpoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMerkleRoot(
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getToken(overrides?: CallOverrides): Promise<[string]>;

    isClaimed(
      epochId: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  addMerkleRoot(
    merkleRoot: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claim(
    epochId: BigNumberish,
    index: BigNumberish,
    account: string,
    amount: BigNumberish,
    merkleProof: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getLastEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  getMerkleRoot(
    epochId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getToken(overrides?: CallOverrides): Promise<string>;

  isClaimed(
    epochId: BigNumberish,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    addMerkleRoot(
      merkleRoot: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    claim(
      epochId: BigNumberish,
      index: BigNumberish,
      account: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    getLastEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    getMerkleRoot(
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getToken(overrides?: CallOverrides): Promise<string>;

    isClaimed(
      epochId: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Claimed(uint256,uint256,address,uint256)"(
      epochId?: null,
      index?: null,
      account?: null,
      amount?: null
    ): ClaimedEventFilter;
    Claimed(
      epochId?: null,
      index?: null,
      account?: null,
      amount?: null
    ): ClaimedEventFilter;

    "MerkleRootAdded(uint256,bytes32)"(
      newEpochId?: null,
      merkleRoot?: null
    ): MerkleRootAddedEventFilter;
    MerkleRootAdded(
      newEpochId?: null,
      merkleRoot?: null
    ): MerkleRootAddedEventFilter;

    "RewardPricesChanged(uint256[])"(
      rewardPrices?: null
    ): RewardPricesChangedEventFilter;
    RewardPricesChanged(rewardPrices?: null): RewardPricesChangedEventFilter;
  };

  estimateGas: {
    addMerkleRoot(
      merkleRoot: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claim(
      epochId: BigNumberish,
      index: BigNumberish,
      account: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getLastEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    getMerkleRoot(
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getToken(overrides?: CallOverrides): Promise<BigNumber>;

    isClaimed(
      epochId: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addMerkleRoot(
      merkleRoot: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claim(
      epochId: BigNumberish,
      index: BigNumberish,
      account: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getLastEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMerkleRoot(
      epochId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isClaimed(
      epochId: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
