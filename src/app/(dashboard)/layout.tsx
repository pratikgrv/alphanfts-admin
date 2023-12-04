import React from 'react'
import TeamSwitcher from './components/team-switcher';
import { MainNav } from './components/main-nav';
import { Search } from './components/search';
import { UserNav } from './components/user-nav';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
			<div className="flex flex-col">
				<header>
					<div className="border-b">
						<div className="flex h-16 items-center px-4">
							<TeamSwitcher />
							<MainNav className="mx-6" />
							<div className="ml-auto flex items-center space-x-4">
								<Search />
								<UserNav />
							</div>
						</div>
					</div>
				</header>
				{children}
			</div>
		);
};

export default DashboardLayout