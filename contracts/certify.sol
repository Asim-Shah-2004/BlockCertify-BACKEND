// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract MyContract {
    string public rootHash;
    address public creator;
    
    struct Entry {
        bool isValid;
        uint256 invalidationTime;
    }

    mapping(uint256 => Entry) public entries;

    event EntryAdded(uint256 id, bool isValid, uint256 invalidationTime);
    event EntryInvalidated(uint256 id);
    event EntryRevalidated(uint256 id);

    modifier onlyCreator() {
        require(msg.sender == creator, "Only the contract creator can perform this action");
        _;
    }

    constructor() {
        creator = msg.sender;
    }

    function addEntry(uint256 id, uint256 invalidationMinutes) public onlyCreator {
        require(entries[id].invalidationTime == 0, "Entry with this id already exists");

        entries[id].isValid = true;
        entries[id].invalidationTime = block.timestamp + invalidationMinutes * 1 minutes;

        emit EntryAdded(id, true, entries[id].invalidationTime);
    }

    function invalidateEntry(uint256 id) public onlyCreator {
        require(entries[id].invalidationTime != 0, "Entry with this id does not exist");
        require(block.timestamp < entries[id].invalidationTime, "Invalidation time has expired");

        entries[id].isValid = false;

        emit EntryInvalidated(id);
    }

    function revalidateEntry(uint256 id) public onlyCreator {
        require(entries[id].invalidationTime != 0, "Entry with this id does not exist");
        require(block.timestamp < entries[id].invalidationTime, "Invalidation time has expired");

        entries[id].isValid = true;

        emit EntryRevalidated(id);
    }

    function checkValidity(uint256 id) public view returns(bool) {
        require(entries[id].invalidationTime != 0, "Entry with this id does not exist");

        return block.timestamp < entries[id].invalidationTime && entries[id].isValid;
    }
}
