import { task } from 'hardhat/config';
import { LensHub__factory } from '../typechain-types'
import { ProtocolState, waitForTx, initEnv, getAddrs } from './helpers/utils';


// 0-indexed account is the deployer,
// 1-indexed account is the governance address,
// 2-indexed account is the treasury,
// 3-indexed account is our general-purpose user.

task('unpause', 'Unpause the lens hub').setAction(async ({}, hre) => {
    const [governance] = await initEnv(hre);
    const address = getAddrs();
    const lensHub = LensHub__factory.connect(address['lensHub proxy'], governance);

    // console.log(await lensHub.getState());
    // await waitForTx(lensHub.setState(ProtocolState.Unpaused));
    // console.log(await lensHub.getState());
    console.log(await lensHub.getState());
    await waitForTx(lensHub.setState(ProtocolState.Unpaused));
    console.log(await lensHub.getState());
});