import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
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
} from "../generated/CommitReveal2L1/CommitReveal2L1"

export function createActivatedEvent(operator: Address): Activated {
  let activatedEvent = changetype<Activated>(newMockEvent())

  activatedEvent.parameters = new Array()

  activatedEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )

  return activatedEvent
}

export function createCoSubmittedEvent(
  startTime: BigInt,
  co: Bytes,
  index: BigInt
): CoSubmitted {
  let coSubmittedEvent = changetype<CoSubmitted>(newMockEvent())

  coSubmittedEvent.parameters = new Array()

  coSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  coSubmittedEvent.parameters.push(
    new ethereum.EventParam("co", ethereum.Value.fromFixedBytes(co))
  )
  coSubmittedEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )

  return coSubmittedEvent
}

export function createCvSubmittedEvent(
  startTime: BigInt,
  cv: Bytes,
  index: BigInt
): CvSubmitted {
  let cvSubmittedEvent = changetype<CvSubmitted>(newMockEvent())

  cvSubmittedEvent.parameters = new Array()

  cvSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  cvSubmittedEvent.parameters.push(
    new ethereum.EventParam("cv", ethereum.Value.fromFixedBytes(cv))
  )
  cvSubmittedEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )

  return cvSubmittedEvent
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
  coefficient: i32
): L1FeeCalculationSet {
  let l1FeeCalculationSetEvent = changetype<L1FeeCalculationSet>(newMockEvent())

  l1FeeCalculationSetEvent.parameters = new Array()

  l1FeeCalculationSetEvent.parameters.push(
    new ethereum.EventParam(
      "coefficient",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(coefficient))
    )
  )

  return l1FeeCalculationSetEvent
}

export function createMerkleRootSubmittedEvent(
  startTime: BigInt,
  merkleRoot: Bytes
): MerkleRootSubmitted {
  let merkleRootSubmittedEvent = changetype<MerkleRootSubmitted>(newMockEvent())

  merkleRootSubmittedEvent.parameters = new Array()

  merkleRootSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  merkleRootSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "merkleRoot",
      ethereum.Value.fromFixedBytes(merkleRoot)
    )
  )

  return merkleRootSubmittedEvent
}

export function createOwnershipHandoverCanceledEvent(
  pendingOwner: Address
): OwnershipHandoverCanceled {
  let ownershipHandoverCanceledEvent =
    changetype<OwnershipHandoverCanceled>(newMockEvent())

  ownershipHandoverCanceledEvent.parameters = new Array()

  ownershipHandoverCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "pendingOwner",
      ethereum.Value.fromAddress(pendingOwner)
    )
  )

  return ownershipHandoverCanceledEvent
}

export function createOwnershipHandoverRequestedEvent(
  pendingOwner: Address
): OwnershipHandoverRequested {
  let ownershipHandoverRequestedEvent =
    changetype<OwnershipHandoverRequested>(newMockEvent())

  ownershipHandoverRequestedEvent.parameters = new Array()

  ownershipHandoverRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "pendingOwner",
      ethereum.Value.fromAddress(pendingOwner)
    )
  )

  return ownershipHandoverRequestedEvent
}

export function createOwnershipTransferredEvent(
  oldOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRandomNumberGeneratedEvent(
  round: BigInt,
  randomNumber: BigInt,
  callbackSuccess: boolean
): RandomNumberGenerated {
  let randomNumberGeneratedEvent =
    changetype<RandomNumberGenerated>(newMockEvent())

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
  randomNumberGeneratedEvent.parameters.push(
    new ethereum.EventParam(
      "callbackSuccess",
      ethereum.Value.fromBoolean(callbackSuccess)
    )
  )

  return randomNumberGeneratedEvent
}

export function createRequestedToSubmitCoEvent(
  startTime: BigInt,
  indices: Array<BigInt>
): RequestedToSubmitCo {
  let requestedToSubmitCoEvent = changetype<RequestedToSubmitCo>(newMockEvent())

  requestedToSubmitCoEvent.parameters = new Array()

  requestedToSubmitCoEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  requestedToSubmitCoEvent.parameters.push(
    new ethereum.EventParam(
      "indices",
      ethereum.Value.fromUnsignedBigIntArray(indices)
    )
  )

  return requestedToSubmitCoEvent
}

export function createRequestedToSubmitCvEvent(
  startTime: BigInt,
  indices: Array<BigInt>
): RequestedToSubmitCv {
  let requestedToSubmitCvEvent = changetype<RequestedToSubmitCv>(newMockEvent())

  requestedToSubmitCvEvent.parameters = new Array()

  requestedToSubmitCvEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  requestedToSubmitCvEvent.parameters.push(
    new ethereum.EventParam(
      "indices",
      ethereum.Value.fromUnsignedBigIntArray(indices)
    )
  )

  return requestedToSubmitCvEvent
}

export function createRequestedToSubmitSFromIndexKEvent(
  startTime: BigInt,
  index: BigInt
): RequestedToSubmitSFromIndexK {
  let requestedToSubmitSFromIndexKEvent =
    changetype<RequestedToSubmitSFromIndexK>(newMockEvent())

  requestedToSubmitSFromIndexKEvent.parameters = new Array()

  requestedToSubmitSFromIndexKEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  requestedToSubmitSFromIndexKEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )

  return requestedToSubmitSFromIndexKEvent
}

export function createRoundEvent(startTime: BigInt, state: BigInt): Round {
  let roundEvent = changetype<Round>(newMockEvent())

  roundEvent.parameters = new Array()

  roundEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  roundEvent.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromUnsignedBigInt(state))
  )

  return roundEvent
}

export function createSSubmittedEvent(
  startTime: BigInt,
  s: Bytes,
  index: BigInt
): SSubmitted {
  let sSubmittedEvent = changetype<SSubmitted>(newMockEvent())

  sSubmittedEvent.parameters = new Array()

  sSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  sSubmittedEvent.parameters.push(
    new ethereum.EventParam("s", ethereum.Value.fromFixedBytes(s))
  )
  sSubmittedEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )

  return sSubmittedEvent
}
