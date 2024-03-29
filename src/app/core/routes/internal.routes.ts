import { ROLES_ENUM } from "../constants/rol.constants";

export const PERMISSION = {
  MENU_PERSONAS      : [ROLES_ENUM.SUPER_ADMIN, ROLES_ENUM.ADMIN, ROLES_ENUM.CORD_TDP, ROLES_ENUM.LIDER, ROLES_ENUM.GESTOR, ROLES_ENUM.CORD_LIDER],
  MENU_MANTENIMIENTO : [ROLES_ENUM.SUPER_ADMIN, ROLES_ENUM.ADMIN, ROLES_ENUM.GESTOR, ROLES_ENUM.CORD_TDP],
  MENU_FACTURACION   : [ROLES_ENUM.SUPER_ADMIN, ROLES_ENUM.GESTOR ],
  MENU_DASHBOARD     : [ROLES_ENUM.SUPER_ADMIN, ROLES_ENUM.GESTOR ],

  SUBMENU_PERSONAS   : [ROLES_ENUM.SUPER_ADMIN, ROLES_ENUM.ADMIN, ROLES_ENUM.CORD_TDP],
  SUBMENU_VACACIONES : [ROLES_ENUM.SUPER_ADMIN, ROLES_ENUM.ADMIN, ROLES_ENUM.LIDER, ROLES_ENUM.CORD_TDP, ROLES_ENUM.GESTOR, ROLES_ENUM.CORD_LIDER],
  SUBMENU_HARDWARE   : [ROLES_ENUM.SUPER_ADMIN, ROLES_ENUM.ADMIN, ROLES_ENUM.CORD_TDP],
  SUBMENU_CUENTA     : [ROLES_ENUM.SUPER_ADMIN, ROLES_ENUM.ADMIN, ROLES_ENUM.CORD_TDP],

  SUBMENU_ENTIDAD    : [ROLES_ENUM.SUPER_ADMIN, ROLES_ENUM.ADMIN, ROLES_ENUM.GESTOR, ROLES_ENUM.CORD_TDP],
  SUBMENU_LIQUIDACION: [ROLES_ENUM.SUPER_ADMIN, ROLES_ENUM.ADMIN, ROLES_ENUM.GESTOR],
  SUBMENU_VISOR      : [ROLES_ENUM.SUPER_ADMIN, ROLES_ENUM.ADMIN, ROLES_ENUM.GESTOR],
  SUBMENU_HAROS      : [ROLES_ENUM.SUPER_ADMIN, ROLES_ENUM.ADMIN, ROLES_ENUM.GESTOR],
}


// 101	Usuario
// 100	Usuario Soporte
// 102	Coordinador Tdp
// 103	Coordinador Lider
// 104	Admin
// 105	Super Admin
// 106	Gestor
