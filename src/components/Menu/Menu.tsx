import useAuth from "~data/hook/useAuth";
import MenuItem from "~components/MenuItem/MenuItem";
import {
  HomeIcon,
  NotificationIcon,
  SettingsIcons,
  SignOutIcon,
} from "~components/icons/icons";
import Logo from "~components/Logo/Logo";

const Menu = () => {
  const { logout } = useAuth();
  return (
    <aside className="flex flex-col dark:bg-gray-900 bg-gray-200">
      <div
        className={`
        flex flex-col items-center justify-center
        h-20 w-20
        bg-gradient-to-r from-indigo-500 to-purple-800`}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" label="Home" icon={HomeIcon} />
        <MenuItem url="/settings" label="Settings" icon={SettingsIcons} />
        <MenuItem
          url="/notifications"
          label="Notifications"
          icon={NotificationIcon}
        />
      </ul>
      <ul>
        <MenuItem
          onClick={logout}
          label="Sign out"
          icon={SignOutIcon}
          className="text-red-600 hover:bg-red-800 hover:text-white dark:text-red-400 dark:hover:text-white"
        />
      </ul>
    </aside>
  );
};

export default Menu;
