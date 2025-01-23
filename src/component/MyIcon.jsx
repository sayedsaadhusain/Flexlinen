import { Icon } from "@iconify/react";

function MyIcon({icon = 'material-symbols-light:shopping-bag-outline-sharp', className="size-5"}) {
  return (
    <Icon
    icon={icon} className={className}
  />
  )
}

export default MyIcon;