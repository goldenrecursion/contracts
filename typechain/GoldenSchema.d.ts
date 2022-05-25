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

interface GoldenSchemaInterface extends ethers.utils.Interface {
  functions: {
    "addEntityType(bytes32)": FunctionFragment;
    "addPredicate(bytes32)": FunctionFragment;
    "addPredicateToEntityType(bytes32,bytes32)": FunctionFragment;
    "entityTypes()": FunctionFragment;
    "owner()": FunctionFragment;
    "predicates()": FunctionFragment;
    "predicatesByEntityType(bytes32)": FunctionFragment;
    "predicatesByEntityTypes()": FunctionFragment;
    "removeEntityType(bytes32)": FunctionFragment;
    "removePredicate(bytes32)": FunctionFragment;
    "removePredicateFromEntityType(bytes32,bytes32)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addEntityType",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addPredicate",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addPredicateToEntityType",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "entityTypes",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "predicates",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "predicatesByEntityType",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "predicatesByEntityTypes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeEntityType",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removePredicate",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removePredicateFromEntityType",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addEntityType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addPredicate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addPredicateToEntityType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "entityTypes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "predicates", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "predicatesByEntityType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "predicatesByEntityTypes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeEntityType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removePredicate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removePredicateFromEntityType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "EntityTypeAdded(bytes32)": EventFragment;
    "EntityTypePredicateAdded(bytes32,bytes32)": EventFragment;
    "EntityTypePredicateRemoved(bytes32,bytes32)": EventFragment;
    "EntityTypeRemoved(bytes32)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PredicateAdded(bytes32)": EventFragment;
    "PredicateRemoved(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EntityTypeAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EntityTypePredicateAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EntityTypePredicateRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EntityTypeRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PredicateAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PredicateRemoved"): EventFragment;
}

export type EntityTypeAddedEvent = TypedEvent<
  [string] & { entityTypeHash: string }
>;

export type EntityTypePredicateAddedEvent = TypedEvent<
  [string, string] & { entityTypeHash: string; predicateHash: string }
>;

export type EntityTypePredicateRemovedEvent = TypedEvent<
  [string, string] & { entityTypeHash: string; predicateHash: string }
>;

export type EntityTypeRemovedEvent = TypedEvent<
  [string] & { entityTypeHash: string }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PredicateAddedEvent = TypedEvent<
  [string] & { predicateHash: string }
>;

export type PredicateRemovedEvent = TypedEvent<
  [string] & { predicateHash: string }
>;

export class GoldenSchema extends BaseContract {
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

  interface: GoldenSchemaInterface;

  functions: {
    addEntityType(
      entityTypeHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addPredicate(
      predicateHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addPredicateToEntityType(
      predicateHash: BytesLike,
      entityTypeHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    entityTypes(overrides?: CallOverrides): Promise<[string[]]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    predicates(overrides?: CallOverrides): Promise<[string[]]>;

    predicatesByEntityType(
      entityTypeHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    predicatesByEntityTypes(
      overrides?: CallOverrides
    ): Promise<
      [([string, string[]] & { entityType: string; predicates: string[] })[]]
    >;

    removeEntityType(
      entityTypeHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removePredicate(
      predicateHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removePredicateFromEntityType(
      predicateHash: BytesLike,
      entityTypeHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addEntityType(
    entityTypeHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addPredicate(
    predicateHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addPredicateToEntityType(
    predicateHash: BytesLike,
    entityTypeHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  entityTypes(overrides?: CallOverrides): Promise<string[]>;

  owner(overrides?: CallOverrides): Promise<string>;

  predicates(overrides?: CallOverrides): Promise<string[]>;

  predicatesByEntityType(
    entityTypeHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<string[]>;

  predicatesByEntityTypes(
    overrides?: CallOverrides
  ): Promise<
    ([string, string[]] & { entityType: string; predicates: string[] })[]
  >;

  removeEntityType(
    entityTypeHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removePredicate(
    predicateHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removePredicateFromEntityType(
    predicateHash: BytesLike,
    entityTypeHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addEntityType(
      entityTypeHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    addPredicate(
      predicateHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    addPredicateToEntityType(
      predicateHash: BytesLike,
      entityTypeHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    entityTypes(overrides?: CallOverrides): Promise<string[]>;

    owner(overrides?: CallOverrides): Promise<string>;

    predicates(overrides?: CallOverrides): Promise<string[]>;

    predicatesByEntityType(
      entityTypeHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<string[]>;

    predicatesByEntityTypes(
      overrides?: CallOverrides
    ): Promise<
      ([string, string[]] & { entityType: string; predicates: string[] })[]
    >;

    removeEntityType(
      entityTypeHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    removePredicate(
      predicateHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    removePredicateFromEntityType(
      predicateHash: BytesLike,
      entityTypeHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "EntityTypeAdded(bytes32)"(
      entityTypeHash?: BytesLike | null
    ): TypedEventFilter<[string], { entityTypeHash: string }>;

    EntityTypeAdded(
      entityTypeHash?: BytesLike | null
    ): TypedEventFilter<[string], { entityTypeHash: string }>;

    "EntityTypePredicateAdded(bytes32,bytes32)"(
      entityTypeHash?: BytesLike | null,
      predicateHash?: BytesLike | null
    ): TypedEventFilter<
      [string, string],
      { entityTypeHash: string; predicateHash: string }
    >;

    EntityTypePredicateAdded(
      entityTypeHash?: BytesLike | null,
      predicateHash?: BytesLike | null
    ): TypedEventFilter<
      [string, string],
      { entityTypeHash: string; predicateHash: string }
    >;

    "EntityTypePredicateRemoved(bytes32,bytes32)"(
      entityTypeHash?: BytesLike | null,
      predicateHash?: BytesLike | null
    ): TypedEventFilter<
      [string, string],
      { entityTypeHash: string; predicateHash: string }
    >;

    EntityTypePredicateRemoved(
      entityTypeHash?: BytesLike | null,
      predicateHash?: BytesLike | null
    ): TypedEventFilter<
      [string, string],
      { entityTypeHash: string; predicateHash: string }
    >;

    "EntityTypeRemoved(bytes32)"(
      entityTypeHash?: BytesLike | null
    ): TypedEventFilter<[string], { entityTypeHash: string }>;

    EntityTypeRemoved(
      entityTypeHash?: BytesLike | null
    ): TypedEventFilter<[string], { entityTypeHash: string }>;

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

    "PredicateAdded(bytes32)"(
      predicateHash?: BytesLike | null
    ): TypedEventFilter<[string], { predicateHash: string }>;

    PredicateAdded(
      predicateHash?: BytesLike | null
    ): TypedEventFilter<[string], { predicateHash: string }>;

    "PredicateRemoved(bytes32)"(
      predicateHash?: BytesLike | null
    ): TypedEventFilter<[string], { predicateHash: string }>;

    PredicateRemoved(
      predicateHash?: BytesLike | null
    ): TypedEventFilter<[string], { predicateHash: string }>;
  };

  estimateGas: {
    addEntityType(
      entityTypeHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addPredicate(
      predicateHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addPredicateToEntityType(
      predicateHash: BytesLike,
      entityTypeHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    entityTypes(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    predicates(overrides?: CallOverrides): Promise<BigNumber>;

    predicatesByEntityType(
      entityTypeHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    predicatesByEntityTypes(overrides?: CallOverrides): Promise<BigNumber>;

    removeEntityType(
      entityTypeHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removePredicate(
      predicateHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removePredicateFromEntityType(
      predicateHash: BytesLike,
      entityTypeHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addEntityType(
      entityTypeHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addPredicate(
      predicateHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addPredicateToEntityType(
      predicateHash: BytesLike,
      entityTypeHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    entityTypes(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    predicates(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    predicatesByEntityType(
      entityTypeHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    predicatesByEntityTypes(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeEntityType(
      entityTypeHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removePredicate(
      predicateHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removePredicateFromEntityType(
      predicateHash: BytesLike,
      entityTypeHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
