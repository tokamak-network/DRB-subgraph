import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  CommitC,
  FulfillRandomness,
  OperatorNumberChanged,
  OwnershipTransferred,
  RandomWordsRequested,
  Recovered
} from "../generated/CRRNGCoordinatorPoFV2/CRRNGCoordinatorPoFV2"

export function createCommitCEvent(
  commitCount: BigInt,
  operator: Address,
  commitVal: Bytes
): CommitC {
  let commitCEvent = changetype<CommitC>(newMockEvent())

  commitCEvent.parameters = new Array()

  commitCEvent.parameters.push(
    new ethereum.EventParam(
      "commitCount",
      ethereum.Value.fromUnsignedBigInt(commitCount)
    )
  )
  commitCEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  commitCEvent.parameters.push(
    new ethereum.EventParam("commitVal", ethereum.Value.fromBytes(commitVal))
  )

  return commitCEvent
}

export function createFulfillRandomnessEvent(
  round: BigInt,
  success: boolean,
  leader: Address
): FulfillRandomness {
  let fulfillRandomnessEvent = changetype<FulfillRandomness>(newMockEvent())

  fulfillRandomnessEvent.parameters = new Array()

  fulfillRandomnessEvent.parameters.push(
    new ethereum.EventParam("round", ethereum.Value.fromUnsignedBigInt(round))
  )
  fulfillRandomnessEvent.parameters.push(
    new ethereum.EventParam("success", ethereum.Value.fromBoolean(success))
  )
  fulfillRandomnessEvent.parameters.push(
    new ethereum.EventParam("leader", ethereum.Value.fromAddress(leader))
  )

  return fulfillRandomnessEvent
}

export function createOperatorNumberChangedEvent(
  operatorCount: BigInt,
  operator: Address,
  isOperator: boolean
): OperatorNumberChanged {
  let operatorNumberChangedEvent = changetype<OperatorNumberChanged>(
    newMockEvent()
  )

  operatorNumberChangedEvent.parameters = new Array()

  operatorNumberChangedEvent.parameters.push(
    new ethereum.EventParam(
      "operatorCount",
      ethereum.Value.fromUnsignedBigInt(operatorCount)
    )
  )
  operatorNumberChangedEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  operatorNumberChangedEvent.parameters.push(
    new ethereum.EventParam(
      "isOperator",
      ethereum.Value.fromBoolean(isOperator)
    )
  )

  return operatorNumberChangedEvent
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

export function createRandomWordsRequestedEvent(
  round: BigInt
): RandomWordsRequested {
  let randomWordsRequestedEvent = changetype<RandomWordsRequested>(
    newMockEvent()
  )

  randomWordsRequestedEvent.parameters = new Array()

  randomWordsRequestedEvent.parameters.push(
    new ethereum.EventParam("round", ethereum.Value.fromUnsignedBigInt(round))
  )

  return randomWordsRequestedEvent
}

export function createRecoveredEvent(round: BigInt, omega: Bytes): Recovered {
  let recoveredEvent = changetype<Recovered>(newMockEvent())

  recoveredEvent.parameters = new Array()

  recoveredEvent.parameters.push(
    new ethereum.EventParam("round", ethereum.Value.fromUnsignedBigInt(round))
  )
  recoveredEvent.parameters.push(
    new ethereum.EventParam("omega", ethereum.Value.fromBytes(omega))
  )

  return recoveredEvent
}
