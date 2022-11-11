import { useState } from 'react';

export default function Legal() {

    const [oneIsShown, setOneIsShown] = useState(false);
    const [twoIsShown, setTwoIsShown] = useState(false);
    const [threeIsShown, setThreeIsShown] = useState(false);
    const [fourIsShown, setFourIsShown] = useState(false);
    const [fiveIsShown, setFiveIsShown] = useState(false);
    const [sixIsShown, setSixIsShown] = useState(false);
    const [sevenIsShown, setSevenIsShown] = useState(false);
    const [eightIsShown, setEightIsShown] = useState(false);
    const [nineIsShown, setNineIsShown] = useState(false);
    const [tenIsShown, setTenIsShown] = useState(false);

    const handleClickOne = () => {
        if (!oneIsShown) {
            setOneIsShown(true);
        } else {
            setOneIsShown(false);
        }
    }

    const handleClickTwo = () => {
        if (!twoIsShown) {
            setTwoIsShown(true);
        } else {
            setTwoIsShown(false);
        }
    }

    const handleClickThree = () => {
        if (!threeIsShown) {
            setThreeIsShown(true);
        } else {
            setThreeIsShown(false);
        }
    }

    const handleClickFour = () => {
        if (!fourIsShown) {
            setFourIsShown(true);
        } else {
            setFourIsShown(false);
        }
    }

    const handleClickFive = () => {
        if (!fiveIsShown) {
            setFiveIsShown(true);
        } else {
            setFiveIsShown(false);
        }
    }

    const handleClickSix = () => {
        if (!sixIsShown) {
            setSixIsShown(true);
        } else {
            setSixIsShown(false);
        }
    }

    const handleClickSeven = () => {
        if (!sevenIsShown) {
            setSevenIsShown(true);
        } else {
            setSevenIsShown(false);
        }
    }

    const handleClickEight = () => {
        if (!eightIsShown) {
            setEightIsShown(true);
        } else {
            setEightIsShown(false);
        }
    }

    const handleClickNine = () => {
        if (!nineIsShown) {
            setNineIsShown(true);
        } else {
            setNineIsShown(false);
        }
    }

    const handleClickTen = () => {
        if (!tenIsShown) {
            setTenIsShown(true);
        } else {
            setTenIsShown(false);
        }
    }

    return(
        <div className='w-full flex justify-center mt-10 mb-10'>
            <div className='w-[45%] flex flex-col gap-y-5'>
                <h1 className='text-5xl font-bold border-b p-3'>Legal GDPR Requirements</h1>
                <div>
                    <h2 className='cursor-pointer hover:underline font-bold text-4xl' onClick={handleClickOne}>Lawful, fair and transparent processing</h2>
                    {
                        oneIsShown && 
                        <div className='text-xl mt-5'>
                            <li className='font-bold mb-5'>Article 5 of the GDPR states that organisations must have documented a lawful reason for processing personal data and that data subjects are aware of the ways their information is being processed and used.</li>
                            <li className='font-bold mb-5'>To ensure transparency, you should create privacy notices and make them easily accessible to data subjects.</li>
                        </div>
                    }
                </div>
                <div>
                    <h2 className='cursor-pointer hover:underline font-bold text-4xl' onClick={handleClickTwo}>Limitation of purpose, data and storage</h2>
                    {
                        twoIsShown && 
                        <div className='text-xl mt-5'>
                            <li className='font-bold mb-5'>Article 5 is that organisations can only collect personal data for a specific purpose. They must also document that purpose and ensure that information is deleted when it’s no longer needed.</li>
                            <li className='font-bold mb-5'>Processing that’s done for archiving purposes in the public interest or for scientific, historical or statistical purposes is given more freedom.</li>
                        </div>
                    }
                </div>
                <div>
                    <h2 className='cursor-pointer hover:underline font-bold text-4xl' onClick={handleClickThree}>Limitation of purpose, data and storage</h2>
                    {
                        threeIsShown && 
                        <div className='text-xl mt-5'>
                            <li className='font-bold mb-5'>The right to be informed</li>
                            <li className='font-bold mb-5'>The right of access</li>
                            <li className='font-bold mb-5'>The right to rectification</li>
                            <li className='font-bold mb-5'>The right to erasure</li>
                            <li className='font-bold mb-5'>The right to restrict processing</li>
                            <li className='font-bold mb-5'>The right to data portability</li>
                            <li className='font-bold mb-5'>The right to object</li>
                            <li className='font-bold mb-5'>Rights related to automated decision making including profiling</li>
                        </div>
                    }
                </div>
                <div>
                    <h2 className='cursor-pointer hover:underline font-bold text-4xl' onClick={handleClickFour}>Consent</h2>
                    {
                        fourIsShown && 
                        <div className='text-xl mt-5'>
                            <li className='font-bold mb-5'>There is a misconception that the GDPR requires organisations to gain an individuals’ consent before processing personal data. In fact, consent is only one of six lawful bases, and it should only be sought if the others don’t apply.</li>
                            <li className='font-bold mb-5'>Essentially, consent must be given with a clear affirmative action. In other words, individuals need a mechanism that requires a deliberate action to opt in, as opposed to pre-ticked boxes.</li>
                        </div>
                    }
                </div>
                <div>
                    <h2 className='cursor-pointer hover:underline font-bold text-4xl' onClick={handleClickFive}>Personal data breaches</h2>
                    {
                        fiveIsShown && 
                        <div className='text-xl mt-5'>
                            <li className='font-bold mb-5'>Article 4 defines a personal data breach as any event leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data transmitted, stored or otherwise processed.</li>
                            <li className='font-bold mb-5'>As this suggests, data breaches aren’t always a result of cyber criminals hacking into an organisation’s systems.</li>
                        </div>
                    }
                </div>
                <div>
                    <h2 className='cursor-pointer hover:underline font-bold text-4xl' onClick={handleClickSix}>Privacy by design</h2>
                    {
                        sixIsShown && 
                        <div className='text-xl mt-5'>
                            <li className='font-bold mb-5'>Implement appropriate technical and organisational measures designed to implement the data protection principles; and</li>
                            <li className='font-bold mb-5'>Integrate safeguards to comply with the GDPR’s requirements and protect the individuals’ rights.</li>
                        </div>
                    }
                </div>
                <div>
                    <h2 className='cursor-pointer hover:underline font-bold text-4xl' onClick={handleClickSeven}>Data protection impact assessment</h2>
                    {
                        sevenIsShown && 
                        <div className='text-xl mt-5'>
                            <li className='font-bold mb-5'>These help organisations identify and minimise privacy risks in data processing activities. They are essential if you process any high-risk data, but they are also relevant when you are introducing a new data collection process, system or technology.</li>
                            <li className='font-bold mb-5'>High risk</li>
                                <p className='pl-10'>Systematic and extensive profiling;</p>
                                <p className='pl-10'>Special category or criminal offence data on a large scale; and</p>
                                <p className='pl-10'>Systematic monitoring of publicly accessible places on a large scale.</p>
                        </div>
                    }

                </div>
                <div>
                    <h2 className='cursor-pointer hover:underline font-bold text-4xl' onClick={handleClickEight}>Data transfers</h2>
                    {
                        eightIsShown && 
                        <div className='text-xl mt-5'>
                            <li className='font-bold mb-5'>Organisations that transfer personal data within the EU don’t need to take any additional steps to protect their personal data.</li>
                            <li className='font-bold mb-5'>Moving data to a third country, you need to use one of the safeguards outlined in Article 46.</li>
                        </div>
                    }
                </div>
                <div>
                    <h2 className='cursor-pointer hover:underline font-bold text-4xl' onClick={handleClickNine}>Data protection officer</h2>
                    {
                        nineIsShown && 
                        <div className='text-xl mt-5'>
                            <li className='font-bold mb-5'>Independent data protection expert who is responsible for advising an organisation on how to comply with its regulatory requirements.</li>
                                <p className='pl-10'>Advising staff on their data protection responsibilities;</p>
                                <p className='pl-10'>Monitoring the organisation’s data protection policies and procedures;</p>
                                <p className='pl-10'>Advising management on whether DPIAs (data protection impact assessments) are necessary;</p>
                                <p className='pl-10'>Serving as the point of contact between the organisation and its supervisory authority; and</p>
                                <p className='pl-10'>Serving as a point of contact for individuals on privacy matters.</p>
                        </div>
                    }
                </div>
                <div>
                    <h2 className='cursor-pointer hover:underline font-bold text-4xl' onClick={handleClickTen}>Awareness and training</h2>
                    {
                        tenIsShown && 
                        <div className='text-xl mt-5'>
                            <li className='font-bold mb-5'>Staff awareness training is mandatory for anyone who handles personal data or who is responsible for overseeing data protection practices.</li>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}