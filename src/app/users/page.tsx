import UserModal from "@/components/modal/user-modal";
import UserTable from "@/components/table/user-table";
import { FC } from "react";



interface Props {
    searchParams: Promise<{userId: string}>;
}


const Users:FC<Props> = async({searchParams}) => {
   const {userId} = await searchParams;

  return (
    <div className="page">
        <h1 className="title">Kullanıcılar</h1>

        
          <UserTable />
        
      
      {/*
      *urlde bir userId parametresi varsa modalı göster
      bu sayede hiç bir yeri client componenta çevirmeden modalı gizle ve gösterme işlemi gerçekleştirildi
       */}

      {userId &&<UserModal userId={userId} /> }
    </div>
  );
};

export default Users;
