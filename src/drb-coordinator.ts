import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import {
  Activated as ActivatedEvent,
  Commit as CommitEvent,
  DeActivated as DeActivatedEvent,
  L1FeeCalculationSet as L1FeeCalculationSetEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RandomNumberRequested as RandomNumberRequestedEvent,
  Refund as RefundEvent,
  Reveal as RevealEvent,
} from "../generated/DRBCoordinator/DRBCoordinator";
import {
  Activated,
  ActivatedOperators,
  Commit,
  DeActivated,
  L1FeeCalculationSet,
  OwnershipTransferred,
  RandomNumberRequested,
  Refund,
  Reveal,
  RoundInfo,
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

export function handleCommit(event: CommitEvent): void {
  let entity = new Commit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.operator = event.params.operator;
  entity.round = event.params.round;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  // RoundInfo
  let roundInfo = RoundInfo.load(event.params.round.toString()) as RoundInfo;
  let currentCommitCount = roundInfo.commitCount;
  roundInfo.commitCount = currentCommitCount.plus(BigInt.fromI32(1));
  roundInfo.save();
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

  // RoundInfo
  let roundInfo = new RoundInfo(event.params.round.toString());
  roundInfo.round = event.params.round;
  roundInfo.requestedTimestamp = event.block.timestamp;
  roundInfo.commitCount = BigInt.fromI32(0);
  roundInfo.revealCount = BigInt.fromI32(0);
  roundInfo.isRefunded = false;
  roundInfo.save();
}

export function handleRefund(event: RefundEvent): void {
  let entity = new Refund(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.round = event.params.round;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  // RoundInfo
  let roundInfo = RoundInfo.load(event.params.round.toString()) as RoundInfo;
  roundInfo.isRefunded = true;
  roundInfo.save();
}

export function handleReveal(event: RevealEvent): void {
  let entity = new Reveal(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.operator = event.params.operator;
  entity.round = event.params.round;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  // RoundInfo
  let roundInfo = RoundInfo.load(event.params.round.toString()) as RoundInfo;
  let currentRevealCount = roundInfo.revealCount;
  roundInfo.revealCount = currentRevealCount.plus(BigInt.fromI32(1));
  roundInfo.save();
}
