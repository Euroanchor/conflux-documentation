---
sidebar_position: 5
title: PoSRegister
---

这个合约用于让用户参与PoS链。 需要与这个合约交互才能成为PoS节点。 这个合约提供了几个方法来增加或减少PoS投票：

- `register` - 注册到PoS链，成为一个PoS节点
- `increaseStake` - 增加PoS权益
- `retire` - 减少PoS权益

还有几个方法可以查询一个账户的PoS信息：

- `getVotes` - 查询一个账户的投票信息，将返回`totalStakedVotes`和`totalUnlockedVotes`
- `identifierToAddress` - 查询一个PoS账户绑定的PoW地址
- `addressToIdentifier` - 查询一个PoW账户绑定的PoS地址

`PoSRegister`的hex40合约地址是`0x0888000000000000000000000000000000000005`

```js
// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0;

interface PoSRegister {
    /**
     * @dev Register PoS account
     * @param indentifier - PoS account address to register
     * @param votePower - votes count
     * @param blsPubKey - BLS public key
     * @param vrfPubKey - VRF public key
     * @param blsPubKeyProof - BLS public key's proof of legality, used to against some attack, generated by conflux-rust fullnode
     */
    function register(
        bytes32 indentifier,
        uint64 votePower,
        bytes calldata blsPubKey,
        bytes calldata vrfPubKey,
        bytes[2] calldata blsPubKeyProof
    ) external;

    /**
     * @dev Increase specified number votes for msg.sender
     * @param votePower - count of votes to increase
     */
    function increaseStake(uint64 votePower) external;

    /**
     * @dev Retire specified number votes for msg.sender
     * @param votePower - count of votes to retire
     */
    function retire(uint64 votePower) external;

    /**
     * @dev Query PoS account's lock info. Include "totalStakedVotes" and "totalUnlockedVotes"
     * @param identifier - PoS address
     */
    function getVotes(bytes32 identifier) external view returns (uint256, uint256);

    /**
     * @dev Query the PoW address binding with specified PoS address
     * @param identifier - PoS address
     */
    function identifierToAddress(bytes32 identifier) external view returns (address);

    /**
     * @dev Query the PoS address binding with specified PoW address
     * @param addr - PoW address
     */
    function addressToIdentifier(address addr) external view returns (bytes32);

    /**
     * @dev Emitted when register method executed successfully
     */
    event Register(bytes32 indexed identifier, bytes blsPubKey, bytes vrfPubKey);

    /**
     * @dev Emitted when increaseStake method executed successfully
     */
    event IncreaseStake(bytes32 indexed identifier, uint64 votePower);

    /**
     * @dev Emitted when retire method executed successfully
     */
    event Retire(bytes32 indexed identifier, uint64 votePower);
}
```
