import arrow from "../assets/icons/sideBarIcons/arrowDown.png"
import user from "../assets/icons/sideBarIcons/user.png"
import squareUser from "../assets/icons/sideBarIcons/squareUser.png"
import groupUsers from "../assets/icons/sideBarIcons/groupUsers.png"

export const sideBarData =[
    {
        "Title":"کاربران" ,
        "icon":user,
        "arrow":arrow,
        "children":[
        {Title:"افزودن کاربران",path:"addUser"},
         {Title:"تغییر اطلاعات کاربران",path:"changingUserInfo"},
        {Title:"مشاهده اطلاعات کاربران",path:"userInfo"}
    ]
    },
    {
        "Title":"مشتری" ,
        "icon":squareUser,
        "arrow":arrow,
        "children":[
           { Title:"افزودن مشتری",path:"addCustomer"},
            {Title:"تغییر اطلاعات مشتری",path:"changingCUstomerInfo"},
            {Title:"مشاهده اطلاعات مشتری",path:"customerInfo"}
        ]
    },
    {
        "Title":"کالاها" ,
        "icon":groupUsers,
        "arrow":arrow,
        "children":[
            {Title:"افزودن کالاها",path:"addGoods"},
            {Title:"تغییر اطلاعات کالاها",path:"changingGoodsInfo"},
           { Title:"مشاهده اطلاعات کالاها",path:"goodsInfo"}
        ]
    },
    {
        "Title":"ال بی آی ها" ,
        "icon":groupUsers,
        "arrow":arrow,
        "children":[
        {Title:"ایجاد حجم سفارش",path:"createOrderVolume"},
            {Title:"ایجاد باربری",path:"createShipment"},
            {Title:"ایجاد گروه کالای هدف",path:"createGoodsGroups"},            
            {Title:"ایجاد دلیل عدم تخصیص",path:"creteDisAllotment"},            

        ]
    },
    {
        "Title":"سفارش ها" ,
        "icon":groupUsers,
        "arrow":arrow,
        "children":[
        {Title:"پیش سفارش ها",path:"preOrders"}]
    },
    {
        "Title":"انبار" ,
        "icon":groupUsers,
        "arrow":arrow,
        "children":[
           { Title:"مشاهده موجودی انبار",path:"storageStock"},
           { Title:"درخواست جابجایی انبار",path:"changeStorage"},
        ]
    },
    {
        "Title":" IP مدیریت " ,
        "icon":groupUsers,
        "path":"IPManagement"
    }
]