/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface SharedOwnershipNFTv2Interface extends ethers.utils.Interface {
  functions: {
    "CALC_PRECISION()": FunctionFragment;
    "MAX_CONTRIBUTION_WEIGHT()": FunctionFragment;
    "TREASURY_SHARE()": FunctionFragment;
    "addWeight(bytes32,uint256)": FunctionFragment;
    "exists(bytes32)": FunctionFragment;
    "getContributorShare(address,bytes32)": FunctionFragment;
    "getTokenWeight(bytes32)": FunctionFragment;
    "getWeight(bytes32,address)": FunctionFragment;
    "goldenTokenContractAddress()": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "minStakeToMint()": FunctionFragment;
    "mint(bytes32)": FunctionFragment;
    "minterReward()": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setGoldenTokenContractAddress(address)": FunctionFragment;
    "setMinStakeToMint(uint256)": FunctionFragment;
    "setMinterReward(uint256)": FunctionFragment;
    "setTreasuryAddress(address)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "treasuryAddress()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "CALC_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_CONTRIBUTION_WEIGHT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TREASURY_SHARE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addWeight",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "exists", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getContributorShare",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenWeight",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getWeight",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "goldenTokenContractAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "minStakeToMint",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "mint", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "minterReward",
    values?: undefined
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
  encodeFunctionData(
    functionFragment: "setMinStakeToMint",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinterReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTreasuryAddress",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "treasuryAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "CALC_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_CONTRIBUTION_WEIGHT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TREASURY_SHARE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addWeight", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getContributorShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getWeight", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "goldenTokenContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minStakeToMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minterReward",
    data: BytesLike
  ): Result;
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
  decodeFunctionResult(
    functionFragment: "setMinStakeToMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinterReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTreasuryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "treasuryAddress",
    data: BytesLike
  ): Result;

  events: {
    "GoldenTokenContractAddressChanged(address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "MinStakeToMintsChanged(uint256)": EventFragment;
    "Minted(bytes32)": EventFragment;
    "MinterRewardChanged(uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TreasuryAddressChanged(address)": EventFragment;
    "WeightAdded(bytes32,uint256)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "GoldenTokenContractAddressChanged"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinStakeToMintsChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Minted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinterRewardChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TreasuryAddressChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WeightAdded"): EventFragment;
}

export type GoldenTokenContractAddressChangedEvent = TypedEvent<
  [string] & { goldenTokenContractAddress: string }
>;

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type MinStakeToMintsChangedEvent = TypedEvent<
  [BigNumber] & { minStakeToMint: BigNumber }
>;

export type MintedEvent = TypedEvent<[string] & { tokenId: string }>;

export type MinterRewardChangedEvent = TypedEvent<
  [BigNumber] & { minterReward: BigNumber }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type TreasuryAddressChangedEvent = TypedEvent<
  [string] & { treasuryAddress: string }
>;

export type WeightAddedEvent = TypedEvent<
  [string, BigNumber] & { tokenId: string; weight: BigNumber }
>;

export class SharedOwnershipNFTv2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SharedOwnershipNFTv2Interface;

  functions: {
    CALC_PRECISION(overrides?: CallOverrides): Promise<[number]>;

    MAX_CONTRIBUTION_WEIGHT(overrides?: CallOverrides): Promise<[number]>;

    TREASURY_SHARE(overrides?: CallOverrides): Promise<[number]>;

    addWeight(
      tokenId: BytesLike,
      weight: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exists(tokenId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    getContributorShare(
      contributor: string,
      tokenId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTokenWeight(
      tokenId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getWeight(
      tokenId: BytesLike,
      contributor: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    goldenTokenContractAddress(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _treasuryAddress: string,
      _goldenTokenContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    minStakeToMint(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      tokenId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    minterReward(overrides?: CallOverrides): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGoldenTokenContractAddress(
      newGoldenTokenContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinStakeToMint(
      newMinStakedToMint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinterReward(
      newMinterReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTreasuryAddress(
      newTreasuryAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    treasuryAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  CALC_PRECISION(overrides?: CallOverrides): Promise<number>;

  MAX_CONTRIBUTION_WEIGHT(overrides?: CallOverrides): Promise<number>;

  TREASURY_SHARE(overrides?: CallOverrides): Promise<number>;

  addWeight(
    tokenId: BytesLike,
    weight: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exists(tokenId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  getContributorShare(
    contributor: string,
    tokenId: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTokenWeight(
    tokenId: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getWeight(
    tokenId: BytesLike,
    contributor: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  goldenTokenContractAddress(overrides?: CallOverrides): Promise<string>;

  initialize(
    _treasuryAddress: string,
    _goldenTokenContractAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  minStakeToMint(overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    tokenId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  minterReward(overrides?: CallOverrides): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGoldenTokenContractAddress(
    newGoldenTokenContractAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinStakeToMint(
    newMinStakedToMint: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinterReward(
    newMinterReward: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTreasuryAddress(
    newTreasuryAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  treasuryAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    CALC_PRECISION(overrides?: CallOverrides): Promise<number>;

    MAX_CONTRIBUTION_WEIGHT(overrides?: CallOverrides): Promise<number>;

    TREASURY_SHARE(overrides?: CallOverrides): Promise<number>;

    addWeight(
      tokenId: BytesLike,
      weight: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    exists(tokenId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    getContributorShare(
      contributor: string,
      tokenId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenWeight(
      tokenId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWeight(
      tokenId: BytesLike,
      contributor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    goldenTokenContractAddress(overrides?: CallOverrides): Promise<string>;

    initialize(
      _treasuryAddress: string,
      _goldenTokenContractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    minStakeToMint(overrides?: CallOverrides): Promise<BigNumber>;

    mint(tokenId: BytesLike, overrides?: CallOverrides): Promise<void>;

    minterReward(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setGoldenTokenContractAddress(
      newGoldenTokenContractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinStakeToMint(
      newMinStakedToMint: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinterReward(
      newMinterReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTreasuryAddress(
      newTreasuryAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    treasuryAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "GoldenTokenContractAddressChanged(address)"(
      goldenTokenContractAddress?: string | null
    ): TypedEventFilter<[string], { goldenTokenContractAddress: string }>;

    GoldenTokenContractAddressChanged(
      goldenTokenContractAddress?: string | null
    ): TypedEventFilter<[string], { goldenTokenContractAddress: string }>;

    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "MinStakeToMintsChanged(uint256)"(
      minStakeToMint?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { minStakeToMint: BigNumber }>;

    MinStakeToMintsChanged(
      minStakeToMint?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { minStakeToMint: BigNumber }>;

    "Minted(bytes32)"(
      tokenId?: BytesLike | null
    ): TypedEventFilter<[string], { tokenId: string }>;

    Minted(
      tokenId?: BytesLike | null
    ): TypedEventFilter<[string], { tokenId: string }>;

    "MinterRewardChanged(uint256)"(
      minterReward?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { minterReward: BigNumber }>;

    MinterRewardChanged(
      minterReward?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { minterReward: BigNumber }>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "TreasuryAddressChanged(address)"(
      treasuryAddress?: string | null
    ): TypedEventFilter<[string], { treasuryAddress: string }>;

    TreasuryAddressChanged(
      treasuryAddress?: string | null
    ): TypedEventFilter<[string], { treasuryAddress: string }>;

    "WeightAdded(bytes32,uint256)"(
      tokenId?: BytesLike | null,
      weight?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { tokenId: string; weight: BigNumber }
    >;

    WeightAdded(
      tokenId?: BytesLike | null,
      weight?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { tokenId: string; weight: BigNumber }
    >;
  };

  estimateGas: {
    CALC_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_CONTRIBUTION_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

    TREASURY_SHARE(overrides?: CallOverrides): Promise<BigNumber>;

    addWeight(
      tokenId: BytesLike,
      weight: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exists(tokenId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getContributorShare(
      contributor: string,
      tokenId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenWeight(
      tokenId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWeight(
      tokenId: BytesLike,
      contributor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    goldenTokenContractAddress(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _treasuryAddress: string,
      _goldenTokenContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    minStakeToMint(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      tokenId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    minterReward(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGoldenTokenContractAddress(
      newGoldenTokenContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinStakeToMint(
      newMinStakedToMint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinterReward(
      newMinterReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTreasuryAddress(
      newTreasuryAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    treasuryAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    CALC_PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_CONTRIBUTION_WEIGHT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TREASURY_SHARE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addWeight(
      tokenId: BytesLike,
      weight: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exists(
      tokenId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getContributorShare(
      contributor: string,
      tokenId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenWeight(
      tokenId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWeight(
      tokenId: BytesLike,
      contributor: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    goldenTokenContractAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _treasuryAddress: string,
      _goldenTokenContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    minStakeToMint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      tokenId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    minterReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGoldenTokenContractAddress(
      newGoldenTokenContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinStakeToMint(
      newMinStakedToMint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinterReward(
      newMinterReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTreasuryAddress(
      newTreasuryAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    treasuryAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
