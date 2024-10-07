import Link from "next/link";
import ProjectImage from "@/components/ProjectImage";

export default function ProjectPage({ params }) {

    function getTechnologies() {
        return [
            'Python', 'GraphQL', 'Hashicorp Vault', 'Web3', 'MetaMask', 'Websockets'
        ]
    }

    return (

        <main>
            <div className='bg-slate-100 text-slate-900'>
                <div className="flex flex-col items-center">
                    <h1 className='text-4xl font-bold text-center p-8'>Trader Bot</h1>
                    <p className="text-xl px-12 sm:px-24">
                        Backtest trading strategies and place real orders on Crypto and Stock exchanges.
                        Connects with both REST and Websockets APIs.
                        Fetch latest or historical market data and place orders on many exchanges: Binance, Kucoin, Coinbase, Alpaca, Dydx.
                        Write your own strategies to backtest and apply to live trading.
                    </p>
                    <div className="max-w-7xl px-24">
                        <ProjectImage
                            imageSrc="/img/projects/trader-bot/liquidity-3d.webp"
                            imageAlt="Uniswap Liquidity 3D Chart"
                            imageSizes="100vw"
                        />
                    </div>
                </div>

                <div className="px-12">
                    <section>
                        <h2 className="sr-only">Features</h2>

                        <div className="flex flex-row flex-wrap gap-10 justify-center py-4">
                            <div className="max-w-md">
                                <h3 className="text-xl font-bold py-4">DeFi integrations</h3>
                                <p className="text-xl">Fetch pool data from Uniswap and options data from Lyra.</p>

                                <h3 className="text-xl font-bold py-4">Liquidity visualization</h3>
                                <p className="text-xl">Visualize Uniswap Pool data liquidity in 2D and 3D.</p>
                            </div>

                            <div className="max-w-lg">
                                <ProjectImage
                                    imageSrc="/img/projects/trader-bot/liquidity-2d.png"
                                    imageAlt="Trader Bot Liquidity 2D Chart"
                                    imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 75vw,  50vw"
                                />
                            </div>
                        </div>

                        <div className="flex flex-row flex-wrap gap-10 justify-center py-4">
                            <div className="max-w-sm">
                                <ProjectImage
                                    imageSrc="/img/projects/trader-bot/forex-sentiment.webp"
                                    imageAlt="Forex Sentiment Chart"
                                    imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 75vw,  100vw"
                                />
                            </div>
                            <div className="max-w-md">
                                <h3 className="text-xl font-bold py-4">Stock Screener</h3>
                                <p className="text-xl">Apply signal strategy to all tickers in single view.</p>

                                <h3 className="text-xl font-bold py-4">Forex sentiment analysis</h3>
                                <p className="text-xl">Analyze Forex sentiment data.</p>

                                <h3 className="text-xl font-bold py-4">Secure Storage</h3>
                                <p className="text-xl">Sensitive keys stored in local <Link target="_blank" className="underline text-blue-800" href="https://www.hashicorp.com/products/vault">HashiCorp Vault</Link>.</p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="px-12 pb-8">

                    <section>
                        <h2 className="text-2xl font-bold py-4 mt-4">Technologies</h2>
                        <div className="flex flex-wrap">
                            {getTechnologies().map(tech => {
                                return (
                                    <span key={tech} className='skill'>{tech}</span>
                                );
                            })}
                        </div>
                    </section>

                </div>

            </div>

        </main >

    )

}