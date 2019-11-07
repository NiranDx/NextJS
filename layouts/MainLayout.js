import Link from 'next/link'

const MainLayout = props =>{
    return(
        <div className='container'>
            <div className='topbar'>
                <div className='logo'>
                    <Link href='/'>
                        <a className='link' >STOCK</a>
                    </Link>
                </div>
                <div className='menu'>
                    <div><Link href='/product'><a className='link'>Product</a></Link></div>
                    <div><Link href='/manage'><a className='link'>Manage</a></Link></div>
                    <div><Link href='/profile'><a className='link'>profile</a></Link></div>
                </div>
            </div>

            <div className='content'>
                {props.children}
            </div>

            <style jsx>{`
                :global(body){
                    font-family: 'Roboto', sans-serif;
                    src:url(/static/font/Roboto-Regular.ttf);
                    font-weight:500;
                    margin:0;
                }
                .topbar{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    height:32px;
                    background-color:grey;
                    padding:0 40px;
                    box-shadow:rgba(0,0,0,0.2)0px 1px 2px;
                }
                .menu{
                    display:flex;
                }
                .menu div{
                    margin-left:10px
                
                }
                .link{
                    text-decoration:none;
                    color:white;
                }
            `}</style>
        </div>
    )
}
export default MainLayout