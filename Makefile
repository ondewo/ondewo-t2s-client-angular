# which branches to use for the build of the client sdk
T2S_API_GIT_BRANCH=tags/4.0.2

T2S_APIS_DIR=src/ondewo-t2s-api
T2S_PROTOS_DIR=${T2S_APIS_DIR}/ondewo

GOOGLE_APIS_DIR=${T2S_APIS_DIR}/googleapis
GOOGLE_PROTOS_DIR=${GOOGLE_APIS_DIR}/google

build: check_out_correct_submodule_versions copy_proto_files_all_submodules npm_run_build

check_out_correct_submodule_versions: 
	@echo "START checking out correct submodule versions ..."
	git submodule update --init --recursive
	git -C ${T2S_APIS_DIR} fetch --all
	git -C ${T2S_APIS_DIR} checkout ${T2S_API_GIT_BRANCH}
	@echo "DONE checking out correct submodule versions."

copy_proto_files_all_submodules: copy_proto_files_for_google_api

copy_proto_files_for_google_api: 
	@echo "START copying googleapis protos from submodules to build folder ..."
	# TODO optimize to only generate the google protos used in t2s
	# -mkdir -p ${T2S_APIS_DIR}/google/api
	# -mkdir -p ${T2S_APIS_DIR}/google/protobuf
	# cp ${GOOGLE_PROTOS_DIR}/api/annotations.proto ${T2S_APIS_DIR}/google/api/
	# cp ${GOOGLE_PROTOS_DIR}/protobuf/struct.proto ${T2S_APIS_DIR}/google/protobuf/
	# cp ${GOOGLE_PROTOS_DIR}/protobuf/empty.proto ${T2S_APIS_DIR}/google/protobuf/
	# cp ${GOOGLE_PROTOS_DIR}/protobuf/field_mask.proto ${T2S_APIS_DIR}/google/protobuf/
	@echo "DONE copying googleapis protos from submodules to build folder."
	
generate_protos:
	@echo "START generate protos ..."
	cd src/ && npm run generate && cd ..
	@echo "DONE generate protos."

npm_run_build:
	@echo "START npm run build ..."
	cd src/ && npm run build && cd ..
	@echo "DONE npm run build."

publish-npm: 
	@echo "START pushing release to npm ..."
	cd src/ && npm run publish-npm && cd ..
	@echo "DONE pushing release to npm."

submodule_update: 
	@echo "START updating submodule ..."
	cd src/ && npm run submodule_update && cd ..
	@echo "DONE updating submodule."

test-in-ondewo-aim: 
	@echo "START copying files to local AIM for testing ..."
	cd src/ && npm run test-in-ondewo-aim && cd ..
	@echo "DONE copying files to local AIM for testing."