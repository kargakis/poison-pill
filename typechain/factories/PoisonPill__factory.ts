/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PoisonPill, PoisonPillInterface } from "../PoisonPill";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_usdc",
        type: "address",
      },
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ethOracle",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenOracle",
        type: "address",
      },
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_users",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_priceDecimals",
        type: "uint8",
      },
      {
        internalType: "uint16",
        name: "_discountBP",
        type: "uint16",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract Authority",
        name: "authority",
        type: "address",
      },
    ],
    name: "AuthorityUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "discountBP",
        type: "uint16",
      },
    ],
    name: "DiscountUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "PriceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "trusted",
        type: "bool",
      },
    ],
    name: "UserTrustUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "USDC",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract Authority",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "discountBP",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ethOracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isTrusted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isUSDC",
        type: "bool",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Authority",
        name: "newAuthority",
        type: "address",
      },
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_discountBP",
        type: "uint16",
      },
    ],
    name: "setDiscount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "bool",
        name: "trusted",
        type: "bool",
      },
    ],
    name: "setIsTrusted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_users",
        type: "address[]",
      },
      {
        internalType: "bool",
        name: "trusted",
        type: "bool",
      },
    ],
    name: "setIsTrustedBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenOracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x610140604052604051620032fd380380620032fd83398181016040528101906200002a919062000c6d565b6000336000816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff167f4ffd725fc4a22075e9ec71c59edf9c38cdeb588a91b24fc5b61388c5be41282b60405160405180910390a28073ffffffffffffffffffffffffffffffffffffffff167f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad60405160405180910390a250506001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167fe95aec380cae16330d146d5499ef7db6f3657e477104a733e771bc09e500d9866001604051620001d9919062000d9f565b60405180910390a250600073ffffffffffffffffffffffffffffffffffffffff168a73ffffffffffffffffffffffffffffffffffffffff16141562000255576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200024c9062000e1d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff161415620002c8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002bf9062000e8f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1614156200033b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003329062000f01565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff161415620003ae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003a59062000f73565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16141580620003ec575060008314155b6200042e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004259062000fe5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614620004b45760008161ffff161415620004ae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004a59062001057565b60405180910390fd5b620004ff565b60008260ff161415620004fe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004f590620010c9565b60405180910390fd5b5b6127108161ffff1611156200054b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000542906200113b565b60405180910390fd5b8973ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508873ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508773ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250508673ffffffffffffffffffffffffffffffffffffffff166101208173ffffffffffffffffffffffffffffffffffffffff16815250508573ffffffffffffffffffffffffffffffffffffffff166101008173ffffffffffffffffffffffffffffffffffffffff168152505080600460006101000a81548161ffff021916908361ffff1602179055508473ffffffffffffffffffffffffffffffffffffffff1660e08173ffffffffffffffffffffffffffffffffffffffff16815250506101205173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015620006f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200071791906200115d565b600460026101000a81548160ff021916908360ff16021790555060c05173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200077f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620007a591906200115d565b600460036101000a81548160ff021916908360ff16021790555060008314156200085d576101005173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000818573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200083e91906200115d565b6004806101000a81548160ff021916908360ff160217905550620008b8565b82600381905550816004806101000a81548160ff021916908360ff1602179055507f66cbca4f3c64fecf1dcb9ce094abcf7f68c3450a1d4e3a8e917dd621edb4ebe083604051620008af9190620011a0565b60405180910390a15b60005b8451811015620009b657600160026000878481518110620008e157620008e0620011bd565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555084818151811062000950576200094f620011bd565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff167fe95aec380cae16330d146d5499ef7db6f3657e477104a733e771bc09e500d9866001604051620009a0919062000d9f565b60405180910390a28080600101915050620008bb565b5050505050505050505050620011ec565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000a0882620009db565b9050919050565b62000a1a81620009fb565b811462000a2657600080fd5b50565b60008151905062000a3a8162000a0f565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000a908262000a45565b810181811067ffffffffffffffff8211171562000ab25762000ab162000a56565b5b80604052505050565b600062000ac7620009c7565b905062000ad5828262000a85565b919050565b600067ffffffffffffffff82111562000af85762000af762000a56565b5b602082029050602081019050919050565b600080fd5b600062000b2562000b1f8462000ada565b62000abb565b9050808382526020820190506020840283018581111562000b4b5762000b4a62000b09565b5b835b8181101562000b78578062000b63888262000a29565b84526020840193505060208101905062000b4d565b5050509392505050565b600082601f83011262000b9a5762000b9962000a40565b5b815162000bac84826020860162000b0e565b91505092915050565b6000819050919050565b62000bca8162000bb5565b811462000bd657600080fd5b50565b60008151905062000bea8162000bbf565b92915050565b600060ff82169050919050565b62000c088162000bf0565b811462000c1457600080fd5b50565b60008151905062000c288162000bfd565b92915050565b600061ffff82169050919050565b62000c478162000c2e565b811462000c5357600080fd5b50565b60008151905062000c678162000c3c565b92915050565b6000806000806000806000806000806101408b8d03121562000c945762000c93620009d1565b5b600062000ca48d828e0162000a29565b9a5050602062000cb78d828e0162000a29565b995050604062000cca8d828e0162000a29565b985050606062000cdd8d828e0162000a29565b975050608062000cf08d828e0162000a29565b96505060a062000d038d828e0162000a29565b95505060c08b015167ffffffffffffffff81111562000d275762000d26620009d6565b5b62000d358d828e0162000b82565b94505060e062000d488d828e0162000bd9565b93505061010062000d5c8d828e0162000c17565b92505061012062000d708d828e0162000c56565b9150509295989b9194979a5092959850565b60008115159050919050565b62000d998162000d82565b82525050565b600060208201905062000db6600083018462000d8e565b92915050565b600082825260208201905092915050565b7f215f757364630000000000000000000000000000000000000000000000000000600082015250565b600062000e0560068362000dbc565b915062000e128262000dcd565b602082019050919050565b6000602082019050818103600083015262000e388162000df6565b9050919050565b7f215f776574680000000000000000000000000000000000000000000000000000600082015250565b600062000e7760068362000dbc565b915062000e848262000e3f565b602082019050919050565b6000602082019050818103600083015262000eaa8162000e68565b9050919050565b7f215f746f6b656e00000000000000000000000000000000000000000000000000600082015250565b600062000ee960078362000dbc565b915062000ef68262000eb1565b602082019050919050565b6000602082019050818103600083015262000f1c8162000eda565b9050919050565b7f215f6574684f7261636c65000000000000000000000000000000000000000000600082015250565b600062000f5b600b8362000dbc565b915062000f688262000f23565b602082019050919050565b6000602082019050818103600083015262000f8e8162000f4c565b9050919050565b7f4e656564206f6e65206f66205f746f6b656e4f7261636c652c205f7072696365600082015250565b600062000fcd60208362000dbc565b915062000fda8262000f95565b602082019050919050565b60006020820190508181036000830152620010008162000fbe565b9050919050565b7f215f646973636f756e7442500000000000000000000000000000000000000000600082015250565b60006200103f600c8362000dbc565b91506200104c8262001007565b602082019050919050565b60006020820190508181036000830152620010728162001030565b9050919050565b7f215f7072696365446563696d616c730000000000000000000000000000000000600082015250565b6000620010b1600f8362000dbc565b9150620010be8262001079565b602082019050919050565b60006020820190508181036000830152620010e481620010a2565b9050919050565b7f496e76616c696420646973636f756e7420626173697320706f696e7473000000600082015250565b600062001123601d8362000dbc565b91506200113082620010eb565b602082019050919050565b60006020820190508181036000830152620011568162001114565b9050919050565b600060208284031215620011765762001175620009d1565b5b6000620011868482850162000c17565b91505092915050565b6200119a8162000bb5565b82525050565b6000602082019050620011b760008301846200118f565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60805160a05160c05160e051610100516101205161206d6200129060003960008181610b820152610fbe01526000818161091e0152610ca001526000818161070c0152818161087201526108fa015260008181610f16015281816111fc01526113b30152600081816107920152818161083601528181610a580152610e7501526000818161062c015281816106d001528181610bac015261115b015261206d6000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806391b7f5ed116100ad578063ad5c464811610071578063ad5c4648146102be578063bf7e214f146102dc578063d65a06b0146102fa578063ef47383514610316578063fc0c546a1461033257610121565b806391b7f5ed1461021857806396d64879146102345780639c154e64146102645780639c8762e114610282578063a035b1fe146102a057610121565b806361d027b3116100f457806361d027b3146101845780636c5ec25c146101a25780637a9e5e4b146101c057806389a30271146101dc5780638da5cb5b146101fa57610121565b80630851ee94146101265780631393916a1461014257806313af40351461015e5780633ccfd60b1461017a575b600080fd5b610140600480360381019061013b9190611721565b610350565b005b61015c6004803603810190610157919061177d565b6103ff565b005b610178600480360381019061017391906117bd565b610515565b005b610182610628565b005b61018c6108f8565b60405161019991906117f9565b60405180910390f35b6101aa61091c565b6040516101b791906117f9565b60405180910390f35b6101da60048036038101906101d59190611852565b610940565b005b6101e4610a56565b6040516101f191906117f9565b60405180910390f35b610202610a7a565b60405161020f91906117f9565b60405180910390f35b610232600480360381019061022d91906118b5565b610a9e565b005b61024e600480360381019061024991906117bd565b610b4c565b60405161025b91906118f1565b60405180910390f35b61026c610b6c565b6040516102799190611929565b60405180910390f35b61028a610b80565b60405161029791906117f9565b60405180910390f35b6102a8610ba4565b6040516102b59190611953565b60405180910390f35b6102c6610baa565b6040516102d391906117f9565b60405180910390f35b6102e4610bce565b6040516102f191906119cd565b60405180910390f35b610314600480360381019061030f91906119e8565b610bf4565b005b610330600480360381019061032b9190611a54565b6112a4565b005b61033a6113b1565b60405161034791906117f9565b60405180910390f35b61037e336000357fffffffff00000000000000000000000000000000000000000000000000000000166113d5565b6103bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b490611ade565b60405180910390fd5b60005b82518110156103fa576103ed8382815181106103df576103de611afe565b5b6020026020010151836103ff565b80806001019150506103c0565b505050565b61042d336000357fffffffff00000000000000000000000000000000000000000000000000000000166113d5565b61046c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046390611ade565b60405180910390fd5b80600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff167fe95aec380cae16330d146d5499ef7db6f3657e477104a733e771bc09e500d9868260405161050991906118f1565b60405180910390a25050565b610543336000357fffffffff00000000000000000000000000000000000000000000000000000000166113d5565b610582576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057990611ade565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f4ffd725fc4a22075e9ec71c59edf9c38cdeb588a91b24fc5b61388c5be41282b60405160405180910390a250565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161068391906117f9565b602060405180830381865afa1580156106a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c49190611b42565b90506000811461078e577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb7f0000000000000000000000000000000000000000000000000000000000000000836040518363ffffffff1660e01b8152600401610749929190611b6f565b6020604051808303816000875af1158015610768573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078c9190611bad565b505b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016107e991906117f9565b602060405180830381865afa158015610806573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061082a9190611b42565b9050600081146108f4577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb7f0000000000000000000000000000000000000000000000000000000000000000836040518363ffffffff1660e01b81526004016108af929190611b6f565b6020604051808303816000875af11580156108ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f29190611bad565b505b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b61096e336000357fffffffff00000000000000000000000000000000000000000000000000000000166113d5565b6109ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a490611ade565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad60405160405180910390a250565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610acc336000357fffffffff00000000000000000000000000000000000000000000000000000000166113d5565b610b0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0290611ade565b60405180910390fd5b806003819055507f66cbca4f3c64fecf1dcb9ce094abcf7f68c3450a1d4e3a8e917dd621edb4ebe081604051610b419190611953565b60405180910390a150565b60026020528060005260406000206000915054906101000a900460ff1681565b600460009054906101000a900461ffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b60035481565b7f000000000000000000000000000000000000000000000000000000000000000081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610c80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7790611c26565b60405180910390fd5b60008060048054906101000a900460ff16905060006003541415610d34577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d09573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2d9190611b42565b9150610d3a565b60035491505b6000600460009054906101000a900461ffff1661ffff1614610d97576000612710600460009054906101000a900461ffff1661ffff1684610d7b9190611c75565b610d859190611cfe565b90508083610d939190611d2f565b9250505b8215610fba5760006006905060008383600a610db39190611ea3565b87610dbe9190611c75565b610dc89190611cfe565b90508160ff16600460039054906101000a900460ff1660ff161115610e205781600460039054906101000a900460ff16610e029190611eee565b600a610e0e9190611ea3565b81610e199190611c75565b9050610e73565b8160ff16600460039054906101000a900460ff1660ff161015610e7257600460039054906101000a900460ff1682610e589190611eee565b600a610e649190611ea3565b81610e6f9190611cfe565b90505b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330896040518463ffffffff1660e01b8152600401610ed093929190611f22565b6020604051808303816000875af1158015610eef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f139190611bad565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610f6f929190611b6f565b6020604051808303816000875af1158015610f8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fb29190611bad565b50505061129e565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611027573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061104b9190611b42565b90506000600460029054906101000a900460ff16600a61106b9190611ea3565b82876110779190611c75565b6110819190611cfe565b905060006012905060008585600a6110999190611ea3565b846110a49190611c75565b6110ae9190611cfe565b90508160ff16600460039054906101000a900460ff1660ff1611156111065781600460039054906101000a900460ff166110e89190611eee565b600a6110f49190611ea3565b816110ff9190611c75565b9050611159565b8160ff16600460039054906101000a900460ff1660ff16101561115857600460039054906101000a900460ff168261113e9190611eee565b600a61114a9190611ea3565b816111559190611cfe565b90505b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd33308b6040518463ffffffff1660e01b81526004016111b693929190611f22565b6020604051808303816000875af11580156111d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f99190611bad565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401611255929190611b6f565b6020604051808303816000875af1158015611274573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112989190611bad565b50505050505b50505050565b6112d2336000357fffffffff00000000000000000000000000000000000000000000000000000000166113d5565b611311576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161130890611ade565b60405180910390fd5b6127108161ffff16111561135a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135190611fa5565b60405180910390fd5b80600460006101000a81548161ffff021916908361ffff1602179055507f6f9a5e245be48e7d6cda9cf2e8e2d408fe822f40210b866064c81eef096aa1d2816040516113a69190611929565b60405180910390a150565b7f000000000000000000000000000000000000000000000000000000000000000081565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114c5578073ffffffffffffffffffffffffffffffffffffffff1663b70096138530866040518463ffffffff1660e01b815260040161146e93929190612000565b602060405180830381865afa9250505080156114a857506040513d601f19601f820116820180604052508101906114a59190611bad565b60015b6114b1576114c4565b80156114c257600192505050611518565b505b5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16149150505b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61158082611537565b810181811067ffffffffffffffff8211171561159f5761159e611548565b5b80604052505050565b60006115b261151e565b90506115be8282611577565b919050565b600067ffffffffffffffff8211156115de576115dd611548565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061161f826115f4565b9050919050565b61162f81611614565b811461163a57600080fd5b50565b60008135905061164c81611626565b92915050565b6000611665611660846115c3565b6115a8565b90508083825260208201905060208402830185811115611688576116876115ef565b5b835b818110156116b1578061169d888261163d565b84526020840193505060208101905061168a565b5050509392505050565b600082601f8301126116d0576116cf611532565b5b81356116e0848260208601611652565b91505092915050565b60008115159050919050565b6116fe816116e9565b811461170957600080fd5b50565b60008135905061171b816116f5565b92915050565b6000806040838503121561173857611737611528565b5b600083013567ffffffffffffffff8111156117565761175561152d565b5b611762858286016116bb565b92505060206117738582860161170c565b9150509250929050565b6000806040838503121561179457611793611528565b5b60006117a28582860161163d565b92505060206117b38582860161170c565b9150509250929050565b6000602082840312156117d3576117d2611528565b5b60006117e18482850161163d565b91505092915050565b6117f381611614565b82525050565b600060208201905061180e60008301846117ea565b92915050565b600061181f82611614565b9050919050565b61182f81611814565b811461183a57600080fd5b50565b60008135905061184c81611826565b92915050565b60006020828403121561186857611867611528565b5b60006118768482850161183d565b91505092915050565b6000819050919050565b6118928161187f565b811461189d57600080fd5b50565b6000813590506118af81611889565b92915050565b6000602082840312156118cb576118ca611528565b5b60006118d9848285016118a0565b91505092915050565b6118eb816116e9565b82525050565b600060208201905061190660008301846118e2565b92915050565b600061ffff82169050919050565b6119238161190c565b82525050565b600060208201905061193e600083018461191a565b92915050565b61194d8161187f565b82525050565b60006020820190506119686000830184611944565b92915050565b6000819050919050565b600061199361198e611989846115f4565b61196e565b6115f4565b9050919050565b60006119a582611978565b9050919050565b60006119b78261199a565b9050919050565b6119c7816119ac565b82525050565b60006020820190506119e260008301846119be565b92915050565b600080604083850312156119ff576119fe611528565b5b6000611a0d858286016118a0565b9250506020611a1e8582860161170c565b9150509250929050565b611a318161190c565b8114611a3c57600080fd5b50565b600081359050611a4e81611a28565b92915050565b600060208284031215611a6a57611a69611528565b5b6000611a7884828501611a3f565b91505092915050565b600082825260208201905092915050565b7f554e415554484f52495a45440000000000000000000000000000000000000000600082015250565b6000611ac8600c83611a81565b9150611ad382611a92565b602082019050919050565b60006020820190508181036000830152611af781611abb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050611b3c81611889565b92915050565b600060208284031215611b5857611b57611528565b5b6000611b6684828501611b2d565b91505092915050565b6000604082019050611b8460008301856117ea565b611b916020830184611944565b9392505050565b600081519050611ba7816116f5565b92915050565b600060208284031215611bc357611bc2611528565b5b6000611bd184828501611b98565b91505092915050565b7f554e545255535445440000000000000000000000000000000000000000000000600082015250565b6000611c10600983611a81565b9150611c1b82611bda565b602082019050919050565b60006020820190508181036000830152611c3f81611c03565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611c808261187f565b9150611c8b8361187f565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611cc457611cc3611c46565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611d098261187f565b9150611d148361187f565b925082611d2457611d23611ccf565b5b828204905092915050565b6000611d3a8261187f565b9150611d458361187f565b925082821015611d5857611d57611c46565b5b828203905092915050565b60008160011c9050919050565b6000808291508390505b6001851115611dba57808604811115611d9657611d95611c46565b5b6001851615611da55780820291505b8081029050611db385611d63565b9450611d7a565b94509492505050565b600082611dd35760019050611e8f565b81611de15760009050611e8f565b8160018114611df75760028114611e0157611e30565b6001915050611e8f565b60ff841115611e1357611e12611c46565b5b8360020a915084821115611e2a57611e29611c46565b5b50611e8f565b5060208310610133831016604e8410600b8410161715611e655782820a905083811115611e6057611e5f611c46565b5b611e8f565b611e728484846001611d70565b92509050818404811115611e8957611e88611c46565b5b81810290505b9392505050565b600060ff82169050919050565b6000611eae8261187f565b9150611eb983611e96565b9250611ee67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484611dc3565b905092915050565b6000611ef982611e96565b9150611f0483611e96565b925082821015611f1757611f16611c46565b5b828203905092915050565b6000606082019050611f3760008301866117ea565b611f4460208301856117ea565b611f516040830184611944565b949350505050565b7f496e76616c696420646973636f756e7420626173697320706f696e7473000000600082015250565b6000611f8f601d83611a81565b9150611f9a82611f59565b602082019050919050565b60006020820190508181036000830152611fbe81611f82565b9050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611ffa81611fc5565b82525050565b600060608201905061201560008301866117ea565b61202260208301856117ea565b61202f6040830184611ff1565b94935050505056fea2646970667358221220daaa3b3fa02c2b30958d0656ad4aee3b23df84c8f07bb9489243d3ac768e5b5564736f6c634300080a0033";

export class PoisonPill__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _usdc: string,
    _weth: string,
    _token: string,
    _ethOracle: string,
    _tokenOracle: string,
    _treasury: string,
    _users: string[],
    _price: BigNumberish,
    _priceDecimals: BigNumberish,
    _discountBP: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<PoisonPill> {
    return super.deploy(
      _usdc,
      _weth,
      _token,
      _ethOracle,
      _tokenOracle,
      _treasury,
      _users,
      _price,
      _priceDecimals,
      _discountBP,
      overrides || {}
    ) as Promise<PoisonPill>;
  }
  getDeployTransaction(
    _usdc: string,
    _weth: string,
    _token: string,
    _ethOracle: string,
    _tokenOracle: string,
    _treasury: string,
    _users: string[],
    _price: BigNumberish,
    _priceDecimals: BigNumberish,
    _discountBP: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _usdc,
      _weth,
      _token,
      _ethOracle,
      _tokenOracle,
      _treasury,
      _users,
      _price,
      _priceDecimals,
      _discountBP,
      overrides || {}
    );
  }
  attach(address: string): PoisonPill {
    return super.attach(address) as PoisonPill;
  }
  connect(signer: Signer): PoisonPill__factory {
    return super.connect(signer) as PoisonPill__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoisonPillInterface {
    return new utils.Interface(_abi) as PoisonPillInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoisonPill {
    return new Contract(address, _abi, signerOrProvider) as PoisonPill;
  }
}
