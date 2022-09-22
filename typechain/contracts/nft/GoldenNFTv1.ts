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

export declare namespace GoldenNFTv1 {
  export type CeramicInfoStruct = { ceramicId: string; entityId: string };

  export type CeramicInfoStructOutput = [string, string] & {
    ceramicId: string;
    entityId: string;
  };
}

export interface GoldenNFTv1Interface extends utils.Interface {
  functions: {
    "_ceramicIds(uint256)": FunctionFragment;
    "_goldenTokenContractAddress()": FunctionFragment;
    "_totalSupply()": FunctionFragment;
    "bulkBurn(uint256[])": FunctionFragment;
    "bulkMint((string,string)[])": FunctionFragment;
    "burn(uint256)": FunctionFragment;
    "doesCeramicIdExist(string)": FunctionFragment;
    "getCeramicId(uint256)": FunctionFragment;
    "getCeramicIdsLength()": FunctionFragment;
    "getEntityId(uint256)": FunctionFragment;
    "getGoldenTokenContractAddress()": FunctionFragment;
    "getTokenId(string)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "mint(string,string)": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setGoldenTokenContractAddress(address)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_ceramicIds"
      | "_goldenTokenContractAddress"
      | "_totalSupply"
      | "bulkBurn"
      | "bulkMint"
      | "burn"
      | "doesCeramicIdExist"
      | "getCeramicId"
      | "getCeramicIdsLength"
      | "getEntityId"
      | "getGoldenTokenContractAddress"
      | "getTokenId"
      | "initialize"
      | "mint"
      | "name"
      | "owner"
      | "renounceOwnership"
      | "setGoldenTokenContractAddress"
      | "symbol"
      | "tokenURI"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_ceramicIds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_goldenTokenContractAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bulkBurn",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "bulkMint",
    values: [GoldenNFTv1.CeramicInfoStruct[]]
  ): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "doesCeramicIdExist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCeramicId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCeramicIdsLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEntityId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getGoldenTokenContractAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getTokenId", values: [string]): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setGoldenTokenContractAddress",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "_ceramicIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_goldenTokenContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bulkBurn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bulkMint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "doesCeramicIdExist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCeramicId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCeramicIdsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEntityId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGoldenTokenContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTokenId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGoldenTokenContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Burned(uint256,string,string)": EventFragment;
    "GoldenTokenContractAddressChanged(address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "Minted(uint256,string,string)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Burned"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "GoldenTokenContractAddressChanged"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Minted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface BurnedEventObject {
  tokenId: BigNumber;
  ceramicId: string;
  entityId: string;
}
export type BurnedEvent = TypedEvent<
  [BigNumber, string, string],
  BurnedEventObject
>;

export type BurnedEventFilter = TypedEventFilter<BurnedEvent>;

export interface GoldenTokenContractAddressChangedEventObject {
  goldenTokenContractAddress: string;
}
export type GoldenTokenContractAddressChangedEvent = TypedEvent<
  [string],
  GoldenTokenContractAddressChangedEventObject
>;

export type GoldenTokenContractAddressChangedEventFilter =
  TypedEventFilter<GoldenTokenContractAddressChangedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface MintedEventObject {
  tokenId: BigNumber;
  ceramicId: string;
  entityId: string;
}
export type MintedEvent = TypedEvent<
  [BigNumber, string, string],
  MintedEventObject
>;

export type MintedEventFilter = TypedEventFilter<MintedEvent>;

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

export interface GoldenNFTv1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GoldenNFTv1Interface;

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
    _ceramicIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    _goldenTokenContractAddress(overrides?: CallOverrides): Promise<[string]>;

    _totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    bulkBurn(
      tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bulkMint(
      infos: GoldenNFTv1.CeramicInfoStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    doesCeramicIdExist(
      ceramicId: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getCeramicId(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getCeramicIdsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    getEntityId(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getGoldenTokenContractAddress(overrides?: CallOverrides): Promise<[string]>;

    getTokenId(
      entityId: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialize(
      goldenTokenContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mint(
      ceramicId: string,
      entityId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGoldenTokenContractAddress(
      newGoldenTokenContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _ceramicIds(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  _goldenTokenContractAddress(overrides?: CallOverrides): Promise<string>;

  _totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  bulkBurn(
    tokenIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bulkMint(
    infos: GoldenNFTv1.CeramicInfoStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burn(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  doesCeramicIdExist(
    ceramicId: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getCeramicId(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getCeramicIdsLength(overrides?: CallOverrides): Promise<BigNumber>;

  getEntityId(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getGoldenTokenContractAddress(overrides?: CallOverrides): Promise<string>;

  getTokenId(entityId: string, overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    goldenTokenContractAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mint(
    ceramicId: string,
    entityId: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGoldenTokenContractAddress(
    newGoldenTokenContractAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _ceramicIds(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    _goldenTokenContractAddress(overrides?: CallOverrides): Promise<string>;

    _totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    bulkBurn(
      tokenIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    bulkMint(
      infos: GoldenNFTv1.CeramicInfoStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    burn(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    doesCeramicIdExist(
      ceramicId: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getCeramicId(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getCeramicIdsLength(overrides?: CallOverrides): Promise<BigNumber>;

    getEntityId(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getGoldenTokenContractAddress(overrides?: CallOverrides): Promise<string>;

    getTokenId(entityId: string, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      goldenTokenContractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    mint(
      ceramicId: string,
      entityId: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setGoldenTokenContractAddress(
      newGoldenTokenContractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Burned(uint256,string,string)"(
      tokenId?: BigNumberish | null,
      ceramicId?: null,
      entityId?: null
    ): BurnedEventFilter;
    Burned(
      tokenId?: BigNumberish | null,
      ceramicId?: null,
      entityId?: null
    ): BurnedEventFilter;

    "GoldenTokenContractAddressChanged(address)"(
      goldenTokenContractAddress?: string | null
    ): GoldenTokenContractAddressChangedEventFilter;
    GoldenTokenContractAddressChanged(
      goldenTokenContractAddress?: string | null
    ): GoldenTokenContractAddressChangedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "Minted(uint256,string,string)"(
      tokenId?: BigNumberish | null,
      ceramicId?: null,
      entityId?: null
    ): MintedEventFilter;
    Minted(
      tokenId?: BigNumberish | null,
      ceramicId?: null,
      entityId?: null
    ): MintedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    _ceramicIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _goldenTokenContractAddress(overrides?: CallOverrides): Promise<BigNumber>;

    _totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    bulkBurn(
      tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bulkMint(
      infos: GoldenNFTv1.CeramicInfoStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    doesCeramicIdExist(
      ceramicId: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCeramicId(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCeramicIdsLength(overrides?: CallOverrides): Promise<BigNumber>;

    getEntityId(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGoldenTokenContractAddress(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenId(entityId: string, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      goldenTokenContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mint(
      ceramicId: string,
      entityId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGoldenTokenContractAddress(
      newGoldenTokenContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _ceramicIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _goldenTokenContractAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bulkBurn(
      tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bulkMint(
      infos: GoldenNFTv1.CeramicInfoStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    doesCeramicIdExist(
      ceramicId: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCeramicId(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCeramicIdsLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEntityId(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGoldenTokenContractAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenId(
      entityId: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      goldenTokenContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mint(
      ceramicId: string,
      entityId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGoldenTokenContractAddress(
      newGoldenTokenContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
