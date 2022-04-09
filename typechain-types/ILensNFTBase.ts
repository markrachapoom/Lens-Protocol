/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type EIP712SignatureStruct = {
  v: BigNumberish;
  r: BytesLike;
  s: BytesLike;
  deadline: BigNumberish;
};

export type EIP712SignatureStructOutput = [
  number,
  string,
  string,
  BigNumber
] & { v: number; r: string; s: string; deadline: BigNumber };

export interface ILensNFTBaseInterface extends utils.Interface {
  functions: {
    "burn(uint256)": FunctionFragment;
    "burnWithSig(uint256,(uint8,bytes32,bytes32,uint256))": FunctionFragment;
    "getDomainSeparator()": FunctionFragment;
    "permit(address,uint256,(uint8,bytes32,bytes32,uint256))": FunctionFragment;
    "permitForAll(address,address,bool,(uint8,bytes32,bytes32,uint256))": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "burnWithSig",
    values: [BigNumberish, EIP712SignatureStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getDomainSeparator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [string, BigNumberish, EIP712SignatureStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "permitForAll",
    values: [string, string, boolean, EIP712SignatureStruct]
  ): string;

  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "burnWithSig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDomainSeparator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "permitForAll",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ILensNFTBase extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ILensNFTBaseInterface;

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
    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burnWithSig(
      tokenId: BigNumberish,
      sig: EIP712SignatureStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getDomainSeparator(overrides?: CallOverrides): Promise<[string]>;

    permit(
      spender: string,
      tokenId: BigNumberish,
      sig: EIP712SignatureStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    permitForAll(
      owner: string,
      operator: string,
      approved: boolean,
      sig: EIP712SignatureStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  burn(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burnWithSig(
    tokenId: BigNumberish,
    sig: EIP712SignatureStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getDomainSeparator(overrides?: CallOverrides): Promise<string>;

  permit(
    spender: string,
    tokenId: BigNumberish,
    sig: EIP712SignatureStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  permitForAll(
    owner: string,
    operator: string,
    approved: boolean,
    sig: EIP712SignatureStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    burn(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    burnWithSig(
      tokenId: BigNumberish,
      sig: EIP712SignatureStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    getDomainSeparator(overrides?: CallOverrides): Promise<string>;

    permit(
      spender: string,
      tokenId: BigNumberish,
      sig: EIP712SignatureStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    permitForAll(
      owner: string,
      operator: string,
      approved: boolean,
      sig: EIP712SignatureStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burnWithSig(
      tokenId: BigNumberish,
      sig: EIP712SignatureStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getDomainSeparator(overrides?: CallOverrides): Promise<BigNumber>;

    permit(
      spender: string,
      tokenId: BigNumberish,
      sig: EIP712SignatureStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    permitForAll(
      owner: string,
      operator: string,
      approved: boolean,
      sig: EIP712SignatureStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burnWithSig(
      tokenId: BigNumberish,
      sig: EIP712SignatureStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getDomainSeparator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    permit(
      spender: string,
      tokenId: BigNumberish,
      sig: EIP712SignatureStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    permitForAll(
      owner: string,
      operator: string,
      approved: boolean,
      sig: EIP712SignatureStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}