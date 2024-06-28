import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { CommitC } from "../generated/schema"
import { CommitC as CommitCEvent } from "../generated/CRRNGCoordinatorPoFV2/CRRNGCoordinatorPoFV2"
import { handleCommitC } from "../src/crrng-coordinator-po-fv-2"
import { createCommitCEvent } from "./crrng-coordinator-po-fv-2-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let commitCount = BigInt.fromI32(234)
    let operator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let commitVal = Bytes.fromI32(1234567890)
    let newCommitCEvent = createCommitCEvent(commitCount, operator, commitVal)
    handleCommitC(newCommitCEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CommitC created and stored", () => {
    assert.entityCount("CommitC", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CommitC",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "commitCount",
      "234"
    )
    assert.fieldEquals(
      "CommitC",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "operator",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CommitC",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "commitVal",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
