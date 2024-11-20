import {
  Activated as ActivatedEvent,
  DeActivated as DeActivatedEvent,
  EIP712DomainChanged as EIP712DomainChangedEvent,
  L1FeeCalculationSet as L1FeeCalculationSetEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RandomNumberGenerated as RandomNumberGeneratedEvent,
  RandomNumberRequested as RandomNumberRequestedEvent
} from "../generated/Commit2Reveal2DRB/Commit2Reveal2DRB"
import {
  Activated,
  DeActivated,
  EIP712DomainChanged,
  L1FeeCalculationSet,
  OwnershipTransferred,
  RandomNumberGenerated,
  RandomNumberRequested
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
  entity.mode = event.params.mode
  entity.coefficient = event.params.coefficient

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
  entity.previousOwner = event.params.previousOwner
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

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRandomNumberRequested(
  event: RandomNumberRequestedEvent
): void {
  let entity = new RandomNumberRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.round = event.params.round
  entity.activatedOperators = event.params.activatedOperators

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
