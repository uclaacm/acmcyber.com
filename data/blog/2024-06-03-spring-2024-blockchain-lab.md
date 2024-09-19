---
title: Blockchain Lab Spring 2024
authors: [Joshua Zhu]
category: Projects
tags: [spring-2024, cyber-lab]
description: Coding our own blockchain
---

# Blockchain Lab

In this Cyber Lab, our group created our own blockchain in Python based upon Bitcoin. Along the way, we learned about concepts like hashing, proof of work, the longest chain protocol, and various blockchain attacks.  

## What is a Blockchain?
A blockchain is a decentralized public digital ledger that is used to record transactions across many participants in a network. Through a consensus mechanism, as long as a majority of the contributors to the blockchain are not malicious, more blocks are added to the chain over time and old blocks become virtually impossible to change. Thus the blockchain can be considered trustworthy as a ledger even though it is open to anyone to contribute to.

## Our Development Journey
We began by creating a centralized blockchain to get a feel for how blocks were structured and chained together. This included creating individual blocks which stored transactions, adding a proof of work to blocks to ensure that computational effort was spent in making the block, and connecting blocks into a chain by including the previous block's hash in the current.

After doing this successfully, we moved on to decentralizing our blockchain. We added features such as miners receiving transactions from users, miners broadcasting blocks to other miners, and adding digital signatures to transactions to ensure authenticity.

## Features

### Transactions and Blocks
To keep things simple, we represented transactions by their sender, receiver, and amount. Then each block could hold a list of such transactions. Each block also had some other data, like the hash of the previous block (to put the "chain" in "blockchain") and a nonce (named `proof` in the code) that is changed until the hash of the block has a certain desired property, more on that below.

```python
@dataclass
class Transaction:
    sender: str
    recipient: str
    amount: float

@dataclass
class Block:
    index: int
    transactions: list[Transaction]
    proof: int
    previous_hash: str
    timestamp: float
```

<br/>

### Proof of Work
Proof of work is a consensus mechanism that ensures some computational work was done for the creation and addition of a block to the blockchain. Transaction information, block associated fields, and a block nonce value are hashed and then attached to the existing blockchain. Computational work is needed to generate an appropriate block nonce value such that the computed hash of the block starts with a set amount of 0's. Combined with the longest chain protocol, which says that the correct blockchain is the chain with the most blocks, this ensures that the blockchain cannot be taken over by malicious actors without them obtaining more computational power than the honest parties.

In the code, to mine a block we continuously added one to the nonce until the hash of the block contained the required number of consecutive zeroes. Only then would we append it onto the chain.

```python
def hash_block(self, block):
        return hashlib.sha256(str(block).encode()).hexdigest()

def check_proof(self, block):
    # Check that the hash of the block ends in difficulty_number many zeros
    block_hash = self.hash_block(block)
    for i in range(1, self.difficulty_number + 1):
        if block_hash[-i] != '0':
            return False
    return True

def mine(self):
        # Give yourself a reward at the beginning of the transactions
        self.add_transaction("network", self.address, self.mining_reward, self.signature)

        # Find the right value for proof
        block = self.create_block(self.next_index(), self.get_transactions(), 0, self.hash_block(self.current_block()))
        while not self.check_proof(block):
              block.proof += 1

        # Add the block to the chain
        self.add_block(block)

        # Clear your current transactions
        self.current_transactions.clear()
        pass
```

We also wrote a function to validate an entire blockchain. The validate chain function checked that each previous hash correctly pointed to the previous block and that each proof of work was valid.

```python
def validate_chain(self, chain):
    if not self.check_proof(chain[0]):
        return False
    for i in range(1, len(chain)):
        b = chain[i]
        if not b.previous_hash == self.hash_block(chain[i - 1]):
            return False
        if not self.check_proof(chain[i]):
            return False
    return True
```

<br/>

### Digital Signatures

A digital signature is an electronic stamp of authentication. Digital signatures prevent impersonations when creating transactions, so that someone cannot pretend to be you and send themselves all your money.

Our blockchain utilizes RSA signatures. RSA uses a public-key algorithm to encrypt and sign messages. Each client will have a public and private key. They keep their private key secret but they broadcast their public keys to everyone in the server. Clients will then use their private key to sign their transactions while miners can verify the signature using the public key.

#### Creating a Private Key:

Our signature utilizes the SHA256 hash function and padding.

```python
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.primitives.asymmetric import rsa
from cryptography.hazmat.primitives import serialization

private_key = rsa.generate_private_key(
    public_exponent=65537,
    key_size=2048,
)

private_pem = private_key.private_bytes(
        encoding=serialization.Encoding.PEM,
        format=serialization.PrivateFormat.PKCS8,
        encryption_algorithm=serialization.NoEncryption()
    )
public_key = private_key.public_key()
public_pem = public_key.public_bytes(
   encoding=serialization.Encoding.PEM,
   format=serialization.PublicFormat.SubjectPublicKeyInfo
)
```

<br/>

#### Signing:

Before sending a transaction to a miner, a client first adds a digital signature. The signature signs the information of the sender, recipient, and amount of the transaction.

```python
def signing(message):
    signature = private_key.sign(
        message,
        padding.PSS(
            mgf=padding.MGF1(hashes.SHA256()),
            salt_length=padding.PSS.MAX_LENGTH
        ),
        hashes.SHA256()
    )
```

<br/>

#### Verifying:

Transactions must be verified before they can be added to the block. Using the public key of the client, the signature can be verified. If the signature does not match, our verify function will raise an InvalidSignature exception.

```python
def verify(public_key, signature, message):
    public_key.verify(
        signature,
        message,
        padding.PSS(
            mgf=padding.MGF1(hashes.SHA256()),
            salt_length=padding.PSS.MAX_LENGTH
        ),
        hashes.SHA256()
)
```

## Takeaways

Coding our own blockchain, even if it was a simplified version, really helped us understand the fundamentals of blockchain. In the future, we might run this lab again, or move on to more advanced topics like smart contracts.
