import {
  Activated as ActivatedEvent,
  CoSubmitted as CoSubmittedEvent,
  CvSubmitted as CvSubmittedEvent,
  DeActivated as DeActivatedEvent,
  EIP712DomainChanged as EIP712DomainChangedEvent,
  L1FeeCalculationSet as L1FeeCalculationSetEvent,
  MerkleRootSubmitted as MerkleRootSubmittedEvent,
  OwnershipHandoverCanceled as OwnershipHandoverCanceledEvent,
  OwnershipHandoverRequested as OwnershipHandoverRequestedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RandomNumberGenerated as RandomNumberGeneratedEvent,
  RequestedToSubmitCo as RequestedToSubmitCoEvent,
  RequestedToSubmitCv as RequestedToSubmitCvEvent,
  RequestedToSubmitSFromIndexK as RequestedToSubmitSFromIndexKEvent,
  Round as RoundEvent,
  SSubmitted as SSubmittedEvent
} from "../generated/CommitReveal2L1/CommitReveal2L1"
import {
  Activated,
  CoSubmitted,
  CvSubmitted,
  DeActivated,
  EIP712DomainChanged,
  L1FeeCalculationSet,
  MerkleRootSubmitted,
  OwnershipHandoverCanceled,
  OwnershipHandoverRequested,
  OwnershipTransferred,
  RandomNumberGenerated,
  RequestedToSubmitCo,
  RequestedToSubmitCv,
  RequestedToSubmitSFromIndexK,
  Round,
  SSubmitted
} from "../generated/schema"

export function handleActivated(event: ActivatedEvent): void {
  let entity = new Activated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCoSubmitted(event: CoSubmittedEvent): void {
  let entity = new CoSubmitted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.startTime = event.params.startTime
  entity.co = event.params.co
  entity.index = event.params.index

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCvSubmitted(event: CvSubmittedEvent): void {
  let entity = new CvSubmitted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.startTime = event.params.startTime
  entity.cv = event.params.cv
  entity.index = event.params.index

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeActivated(event: DeActivatedEvent): void {
  let entity = new DeActivated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEIP712DomainChanged(
  event: EIP712DomainChangedEvent
): void {
  let entity = new EIP712DomainChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleL1FeeCalculationSet(
  event: L1FeeCalculationSetEvent
): void {
  let entity = new L1FeeCalculationSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.coefficient = event.params.coefficient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMerkleRootSubmitted(
  event: MerkleRootSubmittedEvent
): void {
  let entity = new MerkleRootSubmitted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.startTime = event.params.startTime
  entity.merkleRoot = event.params.merkleRoot

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipHandoverCanceled(
  event: OwnershipHandoverCanceledEvent
): void {
  let entity = new OwnershipHandoverCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pendingOwner = event.params.pendingOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipHandoverRequested(
  event: OwnershipHandoverRequestedEvent
): void {
  let entity = new OwnershipHandoverRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pendingOwner = event.params.pendingOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldOwner = event.params.oldOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRandomNumberGenerated(
  event: RandomNumberGeneratedEvent
): void {
  let entity = new RandomNumberGenerated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.round = event.params.round
  entity.randomNumber = event.params.randomNumber
  entity.callbackSuccess = event.params.callbackSuccess

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequestedToSubmitCo(
  event: RequestedToSubmitCoEvent
): void {
  let entity = new RequestedToSubmitCo(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.startTime = event.params.startTime
  entity.indices = event.params.indices

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequestedToSubmitCv(
  event: RequestedToSubmitCvEvent
): void {
  let entity = new RequestedToSubmitCv(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.startTime = event.params.startTime
  entity.indices = event.params.indices

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequestedToSubmitSFromIndexK(
  event: RequestedToSubmitSFromIndexKEvent
): void {
  let entity = new RequestedToSubmitSFromIndexK(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.startTime = event.params.startTime
  entity.index = event.params.index

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRound(event: RoundEvent): void {
  let entity = new Round(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.startTime = event.params.startTime
  entity.state = event.params.state

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSSubmitted(event: SSubmittedEvent): void {
  let entity = new SSubmitted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.startTime = event.params.startTime
  entity.s = event.params.s
  entity.index = event.params.index

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
