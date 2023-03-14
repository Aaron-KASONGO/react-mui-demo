import { ImageList, ImageListItem, Stack } from "@mui/material"
import { imgData } from "./ImagData";

const liste = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

export const MuiImageLIst = () => {
  return (
    <Stack spacing={4}>
        <ImageList
        sx={{ width: 500, height: 450 }}
        cols={3}
        rowHeight={164}
        >
            {
                imgData.map((item, key) => (
                    <ImageListItem key={key}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                            alt={item.title}
                            loading='lazy'  
                        />
                    </ImageListItem>
                ))
            }
        </ImageList>
    </Stack>
  )
}
