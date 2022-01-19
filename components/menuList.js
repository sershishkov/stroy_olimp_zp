import React from 'react';
import Link from 'next/link';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

const MenuList = ({ handleCloseMenu }) => {
  const closeMenu = () => {
    handleCloseMenu();
  };

  return (
    <nav onClick={closeMenu}>
      <List disablePadding>
        <Link href='/alpinist'>
          <a>
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Высотные' />
            </ListItem>
          </a>
        </Link>

        <Link href='/asfalt'>
          <a>
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Асфальт' />
            </ListItem>
          </a>
        </Link>

        {/* <Link href='/elektro'>
          <a>
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Электро' />
            </ListItem>
          </a>
        </Link> */}

        <Link href='/kozyrek'>
          <a>
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Козырек' />
            </ListItem>
          </a>
        </Link>

        <Link href='/kryltso'>
          <a>
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Крыльцо' />
            </ListItem>
          </a>
        </Link>

        <Link href='/metallokonstr'>
          <a>
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Металлоконструкции' />
            </ListItem>
          </a>
        </Link>

        <Link href='/podiezd'>
          <a>
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Подъезд' />
            </ListItem>
          </a>
        </Link>

        <Link href='/roof'>
          <a>
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Кровля' />
            </ListItem>
          </a>
        </Link>

        <Link href='/santeh'>
          <a>
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Сантехнические' />
            </ListItem>
          </a>
        </Link>

        <Link href='/tsokol'>
          <a>
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Цоколь' />
            </ListItem>
          </a>
        </Link>

        <Link href='/windows_doors'>
          <a>
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Окна и двери' />
            </ListItem>
          </a>
        </Link>
        <Link href='/about'>
          <a>
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='О нас' />
            </ListItem>
          </a>
        </Link>
      </List>
    </nav>
  );
};

export default MenuList;
