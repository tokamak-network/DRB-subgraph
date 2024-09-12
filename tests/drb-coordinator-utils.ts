import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Activated,
  Commit,
  DeActivated,
  L1FeeCalculationSet,
  OwnershipTransferred,
  RandomNumberRequested,
  Refund,
  Reveal
} from "../generated/DRBCoordinator/DRBCoordinator"

export function createActivatedEvent(operator: Address): Activated {
  let activatedEvent = changetype<Activated>(newMockEvent())

  activatedEvent.parameters = new Array()

  activatedEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )

  return activatedEvent
}

export function createCommitEvent(operator: Address, round: BigInt): Commit {
  let commitEvent = changetype<Commit>(newMockEvent())

  commitEvent.parameters = new Array()

  commitEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  commitEvent.parameters.push(
    new ethereum.EventParam("round", ethereum.Value.fromUnsignedBigInt(round))
  )

  return commitEvent
}

export function createDeActivatedEvent(operator: Address): DeActivated {
  let deActivatedEvent = changetype<DeActivated>(newMockEvent())

  deActivatedEvent.parameters = new Array()

  deActivatedEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )

  return deActivatedEvent
}

export function createL1FeeCalculationSetEvent(
  mode: i32,
  coefficient: i32
): L1FeeCalculationSet {
  let l1FeeCalculationSetEvent = changetype<L1FeeCalculationSet>(newMockEvent())

  l1FeeCalculationSetEvent.parameters = new Array()

  l1FeeCalculationSetEvent.parameters.push(
    new ethereum.EventParam(
      "mode",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(mode))
    )
  )
  l1FeeCalculationSetEvent.parameters.push(
    new ethereum.EventParam(
      "coefficient",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(coefficient))
    )
  )

  return l1FeeCalculationSetEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRandomNumberRequestedEvent(
  round: BigInt,
  activatedOperators: Array<Address>
): RandomNumberRequested {
  let randomNumberRequestedEvent = changetype<RandomNumberRequested>(
    newMockEvent()
  )

  randomNumberRequestedEvent.parameters = new Array()

  randomNumberRequestedEvent.parameters.push(
    new ethereum.EventParam("round", ethereum.Value.fromUnsignedBigInt(round))
  )
  randomNumberRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "activatedOperators",
      ethereum.Value.fromAddressArray(activatedOperators)
    )
  )

  return randomNumberRequestedEvent
}

export function createRefundEvent(round: BigInt): Refund {
  let refundEvent = changetype<Refund>(newMockEvent())

  refundEvent.parameters = new Array()

  refundEvent.parameters.push(
    new ethereum.EventParam("round", ethereum.Value.fromUnsignedBigInt(round))
  )

  return refundEvent
}

export function createRevealEvent(operator: Address, round: BigInt): Reveal {
  let revealEvent = changetype<Reveal>(newMockEvent())

  revealEvent.parameters = new Array()

  revealEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  revealEvent.parameters.push(
    new ethereum.EventParam("round", ethereum.Value.fromUnsignedBigInt(round))
  )

  return revealEvent
}
