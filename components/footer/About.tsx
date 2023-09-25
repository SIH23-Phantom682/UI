import Link from 'next/link';
import logoImg from '../../assets/logo.svg';

export default function FooterAbout({companyTitle}: {companyTitle?: string}) {
	const title = companyTitle || 'Your Company LLC.';
	return <>
        <div className='page-footer__logo'>
					<Link href='/'>
						<img src="https://dnk.cept.gov.in/customers.web/static/img/dnk2.png" width={100} height={100} alt={title} />
					</Link>
        </div>
        {/* <div className='page-footer__company-info'>
            <p className='title'>{title}</p>
        </div> */}
    </>;
}