import { task } from 'hardhat/config';
import { LensHub__factory } from '../typechain-types';
import { PostDataStruct } from '../typechain-types/LensHub';
import { getAddrs, initEnv, waitForTx, ZERO_ADDRESS } from './helpers/utils';

task('post', 'publishes a post')
    .setAction(async ({}, hre) => {
        const [governance, , user] = await initEnv(hre);
        const addresses = getAddrs();
        const emptyCollectModuleAddress = addresses['empty collect module']; // address
        const lensHub = LensHub__factory.connect(addresses['lensHub proxy'], governance); // address, signer

        // collect module address + whitelist
        await waitForTx(lensHub.whitelistCollectModule(emptyCollectModuleAddress, true));

        const inputStruct: PostDataStruct = {
            profileId: 1,
            contentURI:
              'https://ipfs.fleek.co/ipfs/plantghostplantghostplantghostplantghostplantghostplantghos',
            collectModule: emptyCollectModuleAddress,
            collectModuleInitData: [],
            referenceModule: ZERO_ADDRESS,
            referenceModuleInitData: [],
        };

        await waitForTx(lensHub.connect(user).post(inputStruct));
        console.log(await lensHub.getPub(1, 1));
  });
