import React from "react";
import { menu, work } from "../assets/utils/Texts";

export default function Work({ lang }) {
	return (
		<div id="work" className="container mx-auto py-5 px-5 dark:text-white">
			<div className="md:flex md:h-screen md:items-center">
				<div>
					<p className="text-2xl md:text-3xl font-bold">
						{menu[2][lang]}
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3 ">
						<div class="shadow-md border border-gray-200 rounded-md">
							<img
								class="w-full h-32 object-cover"
								src="https://www.muycomputer.com/wp-content/uploads/2020/02/Telegram.png"
								alt="Telegram"
							/>
							<div class="p-5">
								<h5 class="font-bold text-2xl mb-2">
									{work[0][lang]}
								</h5>
								<p class="font-normal mb-3">{work[1][lang]}</p>
								<a
									className="block border-2 border-blue-500 rounded py-1 px-5 text-lg md:text-xl text-center hover:bg-blue-500"
									href="https://t.me/MyUnsplashBot"
									target="_blank"
									rel="noreferrer"
								>
									{work[2][lang]}
								</a>
							</div>
						</div>

						<div class="shadow-md border border-gray-200 rounded-md">
							<img
								class="w-full h-32 object-cover"
								src="https://miro.medium.com/max/2000/1*jfdwtvU6V6g99q3G7gq7dQ.png"
								alt="Telegram"
							/>
							<div class="p-5">
								<h5 class="font-bold text-2xl mb-2">
									{work[3][lang]}
								</h5>
								<p class="font-normal mb-3">{work[4][lang]}</p>
								<a
									className="block border-2 border-green-500 rounded py-1 px-5 text-lg md:text-xl text-center hover:bg-green-500"
									href="https://t.me/MyUnsplashBot"
									target="_blank"
									rel="noreferrer"
								>
									{work[5][lang]}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
