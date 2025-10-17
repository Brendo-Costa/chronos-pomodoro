import styles from './styles.module.css';


type LinkProps = {
	icon?: React.ReactNode;
	href?: string;
}


export function Link({ icon , href = '#'}: LinkProps) {

		return (

			<a className={styles['link']} href={href}>
					{icon}
			</a>

		)
}
