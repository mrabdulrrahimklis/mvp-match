import {Avatar, Box, Typography} from "@mui/material";
import Logo from '../../assets/img/Logo.png'
import HamIcon from '../../assets/img/HamIcon.png'
import {useEffect} from "react";
import {getUser} from "../store/shared/reducer/user.slice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/configure";
import {IUser} from "../models/User";

export const HeaderComponent = () => {
  const dispatch = useDispatch();
  const user: IUser = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, [])

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: '#F6CA65',
        fontWeight: '700',
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return <Box display='flex' justifyContent='space-between' width='100%' borderBottom='2px solid #F3F6F9'>
    <Box display='flex' margin={1} width='75px'>
      <Box margin={1} marginLeft={3}>
        <img src={Logo} alt='Logo' />
      </Box>
      <Box marginLeft={3} marginTop={1.8}>
        <img src={HamIcon} alt='Logo' />
      </Box>
    </Box>
    <Box margin={1} display='flex' marginRight={10}>
      <Box margin={1} padding={'2px 5px'}>
        <Avatar variant='rounded' {...stringAvatar(`${user.firstName} ${user.lastName}`)} />
      </Box>
      <Typography lineHeight='56px' fontSize='16px' color='#005B96' fontWeight='700'>
        {`${user.firstName} ${user.lastName}`}
      </Typography>
    </Box>
  </Box>;
};
