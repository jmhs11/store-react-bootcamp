import { FC } from "react";

type IconProps = {
	className?: string;
};

const GoBackIcon: FC<IconProps> = (props) => {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="25"
			height="24"
			viewBox="0 0 25 24"
		>
			<defs>
				<path id="dwxc1pzjca" d="M15.705 7.41L14.295 6 8.295 12 14.295 18 15.705 16.59 11.125 12z" />
			</defs>
			<g fill="none" fill-rule="evenodd">
				<g>
					<g transform="translate(-181 -42) translate(181.923 42)">
						<mask id="bfhd66zm3b" fill="#fff">
							<use xlinkHref="#dwxc1pzjca" />
						</mask>
						<g fill="#FFF" mask="url(#bfhd66zm3b)">
							<path d="M0 0H24V24H0z" />
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
};
export default GoBackIcon;
