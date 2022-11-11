export default function Navbar() {
    return(
        <div className='w-screen flex justify-around py-5 border-b shadow-lg'>
            <a href="/" className='hover:text-sky-400'>App</a>
            <a href="/marketing" className='hover:text-sky-400'>Marketing</a>
            <a href="/finance" className='hover:text-sky-400'>Finance</a>
            <a href="/strategy" className='hover:text-sky-400'>Strategy</a>
            <a href="/infrastructure" className='hover:text-sky-400'>Infrastructure</a>
            <a href="/legal" className='hover:text-sky-400'>Legal</a>
        </div>
    );
}