import lobsterResource from './assets/img/lobster.svg';
import ProgressBar from './ProgressBar';
import React from 'react';
import { NftStatus } from './NftStatus';

function App() {
  return (
    <main className="bg-black text-white">
        <div className="xl:h-screen bg-black overflow-hidden relative">{/* Start Hero */}
          <div className="sm:h-96 xl:h-full container mx-auto px-5">
            <div className="absolute top-8">
              {/* <a href="#"><img src={logo} alt="" /></a> */}
            </div>
            <div className="xl:h-full grid gap-y-8 sm:gap-y-0 sm:gap-x-10 sm:grid-cols-2 mt-32 xl:mt-auto content-center">
              <div className="sm:col-span-1 space-y-3 md:space-y-2 xl:space-y-12">
                <h1 className="text-4xl sm:text-4xl xl:text-7xl font-semibold">I'm Charles favourite pet and yet without a name</h1>
                <p className="max-w-sm text-lg md:text-2xl">Please help...!</p>
                <div className="space-y-4">
                  {/* <a href="#"><img className="shadow rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg" src="assets/img/apple-store-white-button.svg" alt="" /></a>
                  <a href="#"><img className="shadow rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg" src="assets/img/google-play-white-button.svg" alt="" /></a> */}
                  <NftStatus render={x =>
                    <React.Fragment>
                      <div className="flex justify-start space-x-2">
                        Voting progress:
                      </div>
                      <div className="flex justify-start space-x-2">
                        <div className="w-3/4 py-1">
                          <ProgressBar  percentage={x.progress}/>
                        </div>
                        <span>{x.progressDisplay}</span>
                      </div>
                      {x.estimatedName && <div className="flex justify-start space-x-2">
                          If voting would complete right now, my name would be:  {x.estimatedName}
                        
                      </div>}
                    </React.Fragment>
                }>
                </NftStatus>
                </div>
                
                

              </div>
              <div className="grid justify-items-center">
                <img className="sm:absolute sm:-right-32 md:-right-16 lg:right-0 bottom-0 w-2/3 sm:w-2/4 lg:w-2/5" src={lobsterResource} alt="" />
              </div>
            </div>
          </div>
          <div className="hidden sm:block sm:absolute bottom-6 sm:inset-x-1/2 invisible xl:visible">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>{/* End Hero */}

        <section className="container mx-auto px-5 py-12 lg:py-28 ">{/* Start About App */}
          <div className="grid gap-4 md:gap-10 lg:grid-cols-3">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">How to contribute to LobsterNFT</h2>
            </div>
            <div className="lg:col-span-2 text-base md:text-lg">
              <p>
              Charles has a lobster, but the poor creature does not yet have a name. Let's use a simple Plutus Smart Contract on Cardano to help Charles find a name for his lobster!
<br/>
We start with a list of names and a "secret random" number, which we will only reveal in the end. Then we need the Community's help! We need 500 Community members who are willing to help name the lobster by creating transactions which will add their own "random" number (from 1 to 100) to the current total.
<br/>
In the end, we will reveal our own "secret random" number, add it to the total provided by the Community, and use the result (after taking the remainder after division by the number of available names) as an index into the list of names to pick the lobster name.
              </p>
              <p className="pt-2">
                More info on our <a className="text-red-300" href="https://github.com/input-output-hk/lobster-challenge">Github</a>.
              </p>
            </div>
          </div>
        </section>{/* End About App */}
        

      </main>
  );
}

export default App;
