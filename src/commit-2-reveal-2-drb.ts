import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import {
  Activated as ActivatedEvent,
  DeActivated as DeActivatedEvent,
  EIP712DomainChanged as EIP712DomainChangedEvent,
  L1FeeCalculationSet as L1FeeCalculationSetEvent,
  MerkleRootSubmitted as MerkleRootSubmittedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RandomNumberGenerated as RandomNumberGeneratedEvent,
  RandomNumberRequested as RandomNumberRequestedEvent,
} from "../generated/Commit2Reveal2DRB/Commit2Reveal2DRB";
import {
  Activated,
  ActivatedOperators,
  DeActivated,
  EIP712DomainChanged,
  L1FeeCalculationSet,
  MerkleRootSubmitted,
  OwnershipTransferred,
  RandomNumberGenerated,
  RandomNumberRequested,
  Round,
} from "../generated/schema";

export function handleActivated(event: ActivatedEvent): void {
  let entity = new Activated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.operator = event.params.operator;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  // ActivatedOperators
  let activatedOperators = ActivatedOperators.load("activatedOperators");
  if (activatedOperators == null) {
    activatedOperators = new ActivatedOperators("activatedOperators");
    activatedOperators.operators = [];
    activatedOperators.operatorsCount = BigInt.fromI32(0);
  }
  let operators = activatedOperators.operators;
  operators.push(event.params.operator);
  activatedOperators.operators = operators;
  activatedOperators.operatorsCount = activatedOperators.operatorsCount.plus(
    BigInt.fromI32(1)
  );
  activatedOperators.save();
}

export function handleDeActivated(event: DeActivatedEvent): void {
  let entity = new DeActivated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.operator = event.params.operator;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  // ActivatedOperators
  let activatedOperators = ActivatedOperators.load(
    "activatedOperators"
  ) as ActivatedOperators;
  // remove operator from activatedOperators
  let operators = activatedOperators.operators;
  let index = operators.indexOf(entity.operator);
  if (index > -1) {
    operators.splice(index, 1);
  }
  activatedOperators.operators = operators;
  activatedOperators.operatorsCount = activatedOperators.operatorsCount.minus(
    BigInt.fromI32(1)
  );
  activatedOperators.save();
}

export function handleEIP712DomainChanged(
  event: EIP712DomainChangedEvent
): void {
  let entity = new EIP712DomainChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleL1FeeCalculationSet(
  event: L1FeeCalculationSetEvent
): void {
  let entity = new L1FeeCalculationSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.mode = event.params.mode;
  entity.coefficient = event.params.coefficient;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRandomNumberGenerated(
  event: RandomNumberGeneratedEvent
): void {
  let entity = new RandomNumberGenerated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.round = event.params.round;
  entity.randomNumber = event.params.randomNumber;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  // Round
  let round = Round.load(
    Bytes.fromBigInt(event.params.round) as Bytes
  ) as Round;
  round.randomNumberGenerated = event.transaction.hash.concatI32(
    event.logIndex.toI32()
  );
  round.save();
}

export function handleMerkleRootSubmitted(
  event: MerkleRootSubmittedEvent
): void {
  let entity = new MerkleRootSubmitted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.round = event.params.round;
  entity.merkleRoot = event.params.merkleRoot;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  // Round
  let round = Round.load(
    Bytes.fromBigInt(event.params.round) as Bytes
  ) as Round;
  round.merkleRootSubmitted = event.transaction.hash.concatI32(
    event.logIndex.toI32()
  );
  round.save();
}

export function handleRandomNumberRequested(
  event: RandomNumberRequestedEvent
): void {
  let entity = new RandomNumberRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.round = event.params.round;

  let activatedOperators: Array<Bytes> =
    event.params.activatedOperators.map<Bytes>(
      (address: Address) => address as Bytes
    );

  entity.activatedOperators = activatedOperators;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  // Round
  let round = new Round(Bytes.fromBigInt(event.params.round) as Bytes);
  round.round = event.params.round;
  round.randomNumberRequested = event.transaction.hash.concatI32(
    event.logIndex.toI32()
  );
  round.save();
}
