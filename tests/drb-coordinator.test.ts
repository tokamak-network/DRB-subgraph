import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Activated } from "../generated/schema"
import { Activated as ActivatedEvent } from "../generated/DRBCoordinator/DRBCoordinator"
import { handleActivated } from "../src/drb-coordinator"
import { createActivatedEvent } from "./drb-coordinator-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let operator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newActivatedEvent = createActivatedEvent(operator)
    handleActivated(newActivatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Activated created and stored", () => {
    assert.entityCount("Activated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Activated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "operator",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
