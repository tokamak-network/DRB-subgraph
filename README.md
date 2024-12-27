<!--
 Copyright 2024 justin

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     https://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

# Subgraph for $Commit-Reveal^2$ protocol

# Quickstart

1. Install

```
yarn
```

## For Thanos Sepolia Network

2. Update your `subgraph.yaml`

- Update the `address` with your NftMarketplace Address
- Update the `startBlock` with the block right before your contract was deployed

3. Build graph locally

```
graph codegen && graph build
```

- `graph codegen`: Generates code in the `generated` folder based on your `schema.graphql`
- `graph build`: Generates the build that will be uploaded to the graph

4. Deploy subgraph

```
make deploy NAME=<subgraph_name>
```

Delete the :8000 from the link printed to the console and use it.

## For other networks

2. Log into [the graph UI](https://thegraph.com/studio/subgraph) and create a new Subgraph.

Use `Ethereum Sepolia` or `Optimism Sepolia` as the network.

3. Initialize Subgraph

```
graph init --studio <subgraph_name>
```

4. Authenticate CLI

```
graph auth  --studio YOUR_DEPLOY_KEY_HERE
```

5. Update your `subgraph.yaml`

- Update the `address` with your NftMarketplace Address
- Update the `startBlock` with the block right before your contract was deployed

6. Build graph locally

```
graph codegen && graph build
```

- `graph codegen`: Generates code in the `generated` folder based on your `schema.graphql`
- `graph build`: Generates the build that will be uploaded to the graph

7. Deploy subgraph

Replace `VERSION_NUMBER_HERE` with a version number like `0.0.1`.

```
graph deploy --studio <subgraph_name> -l VERSION_NUMBER_HERE
```
