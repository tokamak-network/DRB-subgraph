# Copyright 2024 justin
# 
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
# 
#     https://www.apache.org/licenses/LICENSE-2.0
# 
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

-include .env

.PHONY: build deploy remove

build: codegen buildgraph

codegen:; graph codegen
buildgraph:; graph build

deploy: create deplography

NAME := commitreveal2

create:
	@graph create --node $(TITAN_SEPOLIA_NODE) $(NAME)

deploy:
	@graph deploy --node $(TITAN_SEPOLIA_NODE) --ipfs $(TITAN_SEPOLIA_IPFS) $(NAME)


remove:
	@graph remove --node $(TITAN_SEPOLIA_NODE) $(NAME)