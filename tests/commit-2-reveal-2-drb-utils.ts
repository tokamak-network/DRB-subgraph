import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Activated,
  DeActivated,
  EIP712DomainChanged,
  L1FeeCalculationSet,
  OwnershipTransferred,
  RandomNumberGenerated,
  RandomNumberRequested
} from "../generated/Commit2Reveal2DRB/Commit2Reveal2DRB"

export function createActivatedEvent(operator: Address): Activated {
  let activatedEvent = changetype<Activated>(newMockEvent())

  activatedEvent.parameters = new Array()

  activatedEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )

  return activatedEvent
}

export function createDeActivatedEvent(operator: Address): DeActivated {
  let deActivatedEvent = changetype<DeActivated>(newMockEvent())

  deActivatedEvent.parameters = new Array()

  deActivatedEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )

  return deActivatedEvent
}

export function createEIP712DomainChangedEvent(): EIP712DomainChanged {
  let eip712DomainChangedEvent = changetype<EIP712DomainChanged>(newMockEvent())

  eip712DomainChangedEvent.parameters = new Array()

  return eip712DomainChangedEvent
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

export function createRandomNumberGeneratedEvent(
  round: BigInt,
  randomNumber: BigInt
): RandomNumberGenerated {
  let randomNumberGeneratedEvent = changetype<RandomNumberGenerated>(
    newMockEvent()
  )

  randomNumberGeneratedEvent.parameters = new Array()

  randomNumberGeneratedEvent.parameters.push(
    new ethereum.EventParam("round", ethereum.Value.fromUnsignedBigInt(round))
  )
  randomNumberGeneratedEvent.parameters.push(
    new ethereum.EventParam(
      "randomNumber",
      ethereum.Value.fromUnsignedBigInt(randomNumber)
    )
  )

  return randomNumberGeneratedEvent
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
