import { Grid } from "@mui/material";
import styles from "../styles.module.css"
import Link from "next/link";
import Image from "next/image";
import ProjectImage from "@/components/ProjectImage";

export default function ProjectPage({ params }) {

    function getTechnologies() {
        return [
            'Python', 'GraphQL', 'Hashicorp Vault', 'Web3', 'MetaMask', 'Websockets'
        ]
    }

    return (

        <Grid item xs={12}>
            <section className={styles.project_content}>
                <Grid container justifyContent="center">
                    <Grid item xs={8}>
                        <Grid container direction="column">

                            <h1 className={styles.project_h1}>Trader Bot</h1>
                            <Grid container justifyContent="center" className={styles.project_section}>
                                <Grid item xs={8}>
                                    <p>
                                        Backtest trading strategies and place real orders on Crypto and Stock exchanges.
                                        Connects with both REST and Websockets APIs.
                                        Fetch latest or historical market data and place orders on many exchanges: Binance, Kucoin, Coinbase, Alpaca, Dydx.
                                        Write your own strategies to backtest and apply to live trading.
                                    </p>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container justifyContent="center" className={styles.project_section}>
                                    <ProjectImage
                                        imageSrc="/img/projects/trader-bot/liquidity-3d.png"
                                        imageAlt="Uniswap Liquidity 3D"
                                        imageSizes="100vw"
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={4} justifyContent="center" className={styles.project_section}>
                                <Grid item xs={12} md={12} lg={4}>

                                    <h3>DeFi integrations</h3>
                                    <p>Fetch pool data from Uniswap and options data from Lyra.</p>

                                    <h3>Liquidity visualization</h3>
                                    <p>Visualize Uniswap Pool data liquidity in 2D and 3D.</p>

                                </Grid>
                                <Grid item xs={12} md={12} lg={6}>
                                    <Grid container justifyContent="center">
                                        <ProjectImage
                                            imageSrc="/img/projects/trader-bot/liquidity-2d.png"
                                            imageAlt="Trader Bot Liquidity 2D"
                                            imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 75vw,  50vw"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>


                            <Grid container spacing={4} justifyContent="center" className={styles.project_section}>
                                <Grid item xs={12} md={12} lg={6}>
                                    <Grid container justifyContent="center">
                                        <ProjectImage
                                            imageSrc="/img/projects/trader-bot/forex-sentiment.png"
                                            imageAlt="Japanese Reviews Main Screen"
                                            imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 75vw,  100vw"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={12} lg={6}>
                                    <h3>Stock Screener</h3>
                                    <p>Apply signal strategy to all tickers in single view</p>

                                    <h3>Forex sentiment analysis</h3>
                                    <p>Analyze Forex sentiment data.</p>

                                    <h3>Secure Storage</h3>
                                    <p>Sensitive keys stored in local <Link target="_blank" href="https://www.hashicorp.com/products/vault">HashiCorp Vault</Link>.</p>

                                </Grid>
                            </Grid>

                            <h2 className={styles.project_h2}>Technologies</h2>
                            <Grid item xs={12} style={{ marginBottom: "2em" }}>
                                <Grid container justifyContent="flex-start">
                                    {getTechnologies().map(tech => {
                                        return (
                                            <span key={tech} className='skill'>{tech}</span>
                                        );
                                    })}
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </section>
        </Grid>

    )

}