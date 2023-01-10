import React from 'react';
import './pricing.css'
import { FaJediOrder } from "react-icons/fa";

const Pricing = () => {


    const theButton = () => {
        const theButton = document.querySelector(".button");
        theButton.classList.add("button--loading");
    };
    const theButton2 = () => {
        const theButton = document.querySelector("#button2");
        theButton.classList.add("button--loading");
    };
    const theButton3 = () => {
        const theButton = document.querySelector("#button3");
        theButton.classList.add("button--loading");
    };
    return (
        <>
            <section className="Pricing mb-10 w-[100%] ">

                <div className="container px-4 mx-auto Pricing_Container relative z-50">
                    <div className="max-w-2xl mx-auto py-16 text-center">
                        <span className="font-bold tracking-wider uppercase dark:text-violet-400">#Our Pricing Plans</span>
                        <h2 className="text-4xl font-bold lg:text-5xl">Explore flexible pricing plans</h2>
                    </div>
                    <div className="flex flex-wrap items-stretch">

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto lg:px-44">

                            <div className="flex flex-col px-6 rounded shadow sm:p-4 card_background_whiteImage image-full text-black hover:text-white">
                                <div className="pt-5">
                                    <h4 className='text-center text-[18px] font-bold '>Single day pass</h4>
                                    <h1 className="leading-relaxed  text-[64px] text-center font-bold "><span>$</span>250</h1>
                                    <p className='text-center px-5 pb-5 '>One catered lunch Afternoon snacks Fun swag Entrance Afterparty</p>
                                </div>

                                <ul className="w-[80%] mx-auto">
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Everything in Free learning</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Phasellus tellus to learning</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Praesent faucibus  learning</span>
                                    </li>
                                    <li className="flex items-center space-x-2">

                                    </li>

                                </ul>

                                <div className="flex justify-center">
                                    <button id='button' type="button" className="button mt-5 flex" onClick={theButton}>
                                        <FaJediOrder className='mt-1 dark:text-black mx-1'></FaJediOrder><span className="button__text">Submite</span>
                                    </button>
                                </div>


                            </div>

                            {/* <div className="flex justify-center mx-auto w-full h-[75vh] sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 ">
                                <div className="flex flex-col px-6  rounded shadow sm:p-4 card_background_Image">
                                    <div className="pt-5">
                                        <h4 className='text-center text-[18px] font-bold'>Single day pass</h4>
                                        <h1 className="leading-relaxed dark:text-gray-100 text-[64px] text-center font-bold "><span>$</span>250</h1>
                                        <p className='text-center px-5 pb-5'>One catered lunch Afternoon snacks Fun swag Entrance Afterparty</p>
                                    </div>

                                    <ul className="w-[80%] mx-auto">
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Everything in Free</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Phasellus tellus</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Praesent faucibus</span>
                                        </li>
                                        <li className="flex items-center space-x-2">

                                        </li>

                                    </ul>

                                    <div className="flex justify-center">
                                        <button id='button' type="button" className="button mt-5 flex" onClick={theButton}>
                                            <FaJediOrder className='mt-1 dark:text-black mx-1'></FaJediOrder><span className="button__text">Submite</span>
                                        </button>
                                    </div>


                                </div>
                            </div> */}
                            <div className="flex flex-col px-6 rounded shadow sm:p-4 card_background_Image image-full text-black hover:text-white">
                                <div className="pt-5">
                                    <h4 className='text-center text-[18px] font-bold '>Single day pass</h4>
                                    <h1 className="leading-relaxed  text-[64px] text-center font-bold "><span>$</span>250</h1>
                                    <p className='text-center px-5 pb-5 '>One catered lunch Afternoon snacks Fun swag Entrance Afterparty</p>
                                </div>

                                <ul className="w-[80%] mx-auto">
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Everything in Free learning</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Phasellus tellus to learning</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Praesent faucibus  learning</span>
                                    </li>
                                    <li className="flex items-center space-x-2">

                                    </li>

                                </ul>

                                <div className="flex justify-center">
                                    <button id='button' type="button" className="button mt-5 flex" onClick={theButton}>
                                        <FaJediOrder className='mt-1 dark:text-black mx-1'></FaJediOrder><span className="button__text">Submite</span>
                                    </button>
                                </div>


                            </div>


                            <div className="flex flex-col px-6 rounded shadow sm:p-4 card_background_whiteImage image-full text-black hover:text-white">
                                <div className="pt-5">
                                    <h4 className='text-center text-[18px] font-bold '>Single day pass</h4>
                                    <h1 className="leading-relaxed  text-[64px] text-center font-bold "><span>$</span>250</h1>
                                    <p className='text-center px-5 pb-5 '>One catered lunch Afternoon snacks Fun swag Entrance Afterparty</p>
                                </div>

                                <ul className="w-[80%] mx-auto">
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Everything in Free learning</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Phasellus tellus to learning</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Praesent faucibus  learning</span>
                                    </li>
                                    <li className="flex items-center space-x-2">

                                    </li>

                                </ul>

                                <div className="flex justify-center">
                                    <button id='button' type="button" className="button mt-5 flex" onClick={theButton}>
                                        <FaJediOrder className='mt-1 dark:text-black mx-1'></FaJediOrder><span className="button__text">Submite</span>
                                    </button>
                                </div>


                            </div>


                        </div>



                    </div>
                </div>


            </section>
        </>
    );
};

export default Pricing;