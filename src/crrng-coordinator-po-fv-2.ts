import { BigInt } from "@graphprotocol/graph-ts"
import {
  CommitC as CommitCEvent,
  FulfillRandomness as FulfillRandomnessEvent,
  OperatorNumberChanged as OperatorNumberChangedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RandomWordsRequested as RandomWordsRequestedEvent,
  Recovered as RecoveredEvent
} from "../generated/CRRNGCoordinatorPoFV2/CRRNGCoordinatorPoFV2"
import {
  CommitC,
  FulfillRandomness,
  OperatorNumberChanged,
  OwnershipTransferred,
  RandomWordsRequested,
  Recovered,
  RoundInfo
} from "../generated/schema"

export function handleCommitC(event: CommitCEvent): void {
  // * get
  let entity = CommitC.load(event.params.committer.concatI32(event.params.round.toI32()))
  let roundInfo = RoundInfo.load(event.params.round.toString()) as RoundInfo
  if (entity == null) {
    entity = new CommitC(
      event.params.committer.concatI32(event.params.round.toI32())
    )
    entity.round = event.params.round
    entity.commitIndex = event.params.commitIndex
    entity.msgSender = event.params.committer
    entity.commitVal = event.params.commitVal
    entity.blockTimestamp = event.block.timestamp
    roundInfo.commitCount = roundInfo.commitCount.plus(BigInt.fromI32(1))
  } else {
    entity.commitVal = event.params.commitVal
    entity.blockTimestamp = event.block.timestamp
    roundInfo.invalidCommitCount = roundInfo.invalidCommitCount.minus(BigInt.fromI32(1))
  }
  roundInfo.validCommitCount = roundInfo.commitCount.minus(roundInfo.invalidCommitCount)

  // * save
  entity.roundInfo = roundInfo.id
  entity.save()
  roundInfo.save()
}

export function handleFulfillRandomness(event: FulfillRandomnessEvent): void {
  let entity = new FulfillRandomness(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.round = event.params.round
  entity.success = event.params.success
  entity.msgSender = event.params.fulfiller
  entity.blockTimestamp = event.block.timestamp

  let roundInfo = RoundInfo.load(event.params.round.toString()) as RoundInfo
  roundInfo.isFulfillExecuted = true
  roundInfo.isFulfillSucceeded = event.params.success

  entity.roundInfo = roundInfo.id
  entity.save()
  roundInfo.save()
}

export function handleOperatorNumberChanged(
  event: OperatorNumberChangedEvent
): void {
  let entity = new OperatorNumberChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operatorCount = event.params.operatorCount
  entity.operator = event.params.operator
  entity.isOperator = event.params.isOperator
  entity.blockTimestamp = event.block.timestamp

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRandomWordsRequested(
  event: RandomWordsRequestedEvent
): void {
  // RandomWordsRequested
  let entity = new RandomWordsRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.round = event.params.round
  entity.blockTimestamp = event.block.timestamp

  // RoundInfo
  let roundInfo = RoundInfo.load(event.params.round.toString())
  if (roundInfo == null) {
    roundInfo = new RoundInfo(event.params.round.toString())
    roundInfo.round = event.params.round
    roundInfo.isRecovered = false
    roundInfo.isFulfillExecuted = false
    roundInfo.isFulfillSucceeded = false
    roundInfo.commitCount = BigInt.fromI32(0)
    roundInfo.validCommitCount = BigInt.fromI32(0)
    roundInfo.invalidCommitCount = BigInt.fromI32(0)
  } else {
    if(roundInfo.commitCount.minus(roundInfo.invalidCommitCount) == BigInt.fromI32(1)) {
      roundInfo.invalidCommitCount = roundInfo.invalidCommitCount.plus(BigInt.fromI32(1))
    }
    roundInfo.validCommitCount = roundInfo.commitCount.minus(roundInfo.invalidCommitCount)
  }

  
  // * save
  roundInfo.save()
  entity.roundInfo = roundInfo.id
  entity.save()
}

export function handleRecovered(event: RecoveredEvent): void {
  let entity = new Recovered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.round = event.params.round
  entity.omega = event.params.omega
  entity.msgSender = event.params.recoverer
  entity.blockTimestamp = event.block.timestamp

  let roundInfo = RoundInfo.load(event.params.round.toString()) as RoundInfo
  roundInfo.isRecovered = true

  entity.roundInfo = roundInfo.id
  entity.save()
  roundInfo.save()
}
