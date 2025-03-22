import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Activated,
  CoSubmitted,
  CvSubmitted,
  DeActivated,
  EIP712DomainChanged,
  IsInProcess,
  L1FeeCalculationSet,
  MerkleRootSubmitted,
  OwnershipHandoverCanceled,
  OwnershipHandoverRequested,
  OwnershipTransferred,
  RandomNumberGenerated,
  RandomNumberRequested,
  RequestedToSubmitCo,
  RequestedToSubmitCv,
  RequestedToSubmitSFromIndexK,
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
  timestamp: BigInt,
  co: Bytes,
  index: BigInt
): CoSubmitted {
  let coSubmittedEvent = changetype<CoSubmitted>(newMockEvent())

  coSubmittedEvent.parameters = new Array()

  coSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
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
  timestamp: BigInt,
  cv: Bytes,
  index: BigInt
): CvSubmitted {
  let cvSubmittedEvent = changetype<CvSubmitted>(newMockEvent())

  cvSubmittedEvent.parameters = new Array()

  cvSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
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

export function createIsInProcessEvent(isInProcess: BigInt): IsInProcess {
  let isInProcessEvent = changetype<IsInProcess>(newMockEvent())

  isInProcessEvent.parameters = new Array()

  isInProcessEvent.parameters.push(
    new ethereum.EventParam(
      "isInProcess",
      ethereum.Value.fromUnsignedBigInt(isInProcess)
    )
  )

  return isInProcessEvent
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
  timestamp: BigInt,
  merkleRoot: Bytes
): MerkleRootSubmitted {
  let merkleRootSubmittedEvent = changetype<MerkleRootSubmitted>(newMockEvent())

  merkleRootSubmittedEvent.parameters = new Array()

  merkleRootSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
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

export function createRandomNumberRequestedEvent(
  round: BigInt,
  timestamp: BigInt,
  activatedOperators: Array<Address>
): RandomNumberRequested {
  let randomNumberRequestedEvent =
    changetype<RandomNumberRequested>(newMockEvent())

  randomNumberRequestedEvent.parameters = new Array()

  randomNumberRequestedEvent.parameters.push(
    new ethereum.EventParam("round", ethereum.Value.fromUnsignedBigInt(round))
  )
  randomNumberRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  randomNumberRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "activatedOperators",
      ethereum.Value.fromAddressArray(activatedOperators)
    )
  )

  return randomNumberRequestedEvent
}

export function createRequestedToSubmitCoEvent(
  timestamp: BigInt,
  indices: Array<BigInt>
): RequestedToSubmitCo {
  let requestedToSubmitCoEvent = changetype<RequestedToSubmitCo>(newMockEvent())

  requestedToSubmitCoEvent.parameters = new Array()

  requestedToSubmitCoEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
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
  timestamp: BigInt,
  indices: Array<BigInt>
): RequestedToSubmitCv {
  let requestedToSubmitCvEvent = changetype<RequestedToSubmitCv>(newMockEvent())

  requestedToSubmitCvEvent.parameters = new Array()

  requestedToSubmitCvEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
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
  timestamp: BigInt,
  index: BigInt
): RequestedToSubmitSFromIndexK {
  let requestedToSubmitSFromIndexKEvent =
    changetype<RequestedToSubmitSFromIndexK>(newMockEvent())

  requestedToSubmitSFromIndexKEvent.parameters = new Array()

  requestedToSubmitSFromIndexKEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  requestedToSubmitSFromIndexKEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )

  return requestedToSubmitSFromIndexKEvent
}

export function createSSubmittedEvent(
  timestamp: BigInt,
  s: Bytes,
  index: BigInt
): SSubmitted {
  let sSubmittedEvent = changetype<SSubmitted>(newMockEvent())

  sSubmittedEvent.parameters = new Array()

  sSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
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
