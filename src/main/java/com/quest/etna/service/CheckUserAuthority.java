package com.quest.etna.service;

import com.quest.etna.model.User;
import com.quest.etna.model.UserRole;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CheckUserAuthority {

    public Boolean checkAddressAuthority(User user, int addressId) {
        if (user.getRole() == UserRole.ROLE_ADMIN) {
            return true;
        } else {
            try {
//                List<Address> addresses = user.getAddressesList();
//                List<Address> userAllowedAddress = new ArrayList<>();
//                for (Address address : addresses) {
//                    if (address.getId() == addressId) {
//                        userAllowedAddress.add(address);
//                        break;
//                    }
//                }
//                return userAllowedAddress.size() > 0;

                return true;

            } catch (Exception ex) {
                return false;
            }
        }
    }


    public Boolean checkUserAuthority(User user, int userId) {
        if (user.getRole() == UserRole.ROLE_ADMIN) {
            return true;
        } else{
            return user.getId() == userId;
        }
    }
    
    public Boolean checkUserAuthority(User user) {
            return user.getRole() == UserRole.ROLE_ADMIN;
    }
    
}
/**
 *

 export const CHANGE_SEARCH_FIELD ='CHANGE_SEARCH_FIELD';

 export const REQUEST_USERS_PENDING ='REQUEST_USERS_PENDING';
 export const REQUEST_USERS_SUCCESS ='REQUEST_USERS_SUCCESS';
 export const REQUEST_USERS_FAILED ='REQUEST_USERS_FAILED';


 export const REQUEST_USER_PENDING ='REQUEST_USER_PENDING';
 export const REQUEST_USER_SUCCESS ='REQUEST_USER_SUCCESS';
 export const REQUEST_USER_FAILED ='REQUEST_USER_FAILED';

 export const REQUEST_USER_CREATE ='REQUEST_USER_CREATE';
 export const REQUEST_USER_EDIT ='REQUEST_USER_EDIT';
 export const REQUEST_USER_DELETE ='REQUEST_USER_DELETE';

 export const REQUEST_PROJECTS_PENDING ='REQUEST_PROJECTS_PENDING';
 export const REQUEST_PROJECTS_SUCCESS ='REQUEST_PROJECTS_SUCCESS';
 export const REQUEST_PROJECTS_FAILED ='REQUEST_PROJECTS_FAILED';

 export const REQUEST_PROJECT_CREATE ='REQUEST_PROJECT_CREATE';
 export const REQUEST_PROJECT_EDIT ='REQUEST_PROJECT_EDIT';
 export const REQUEST_PROJECT_DELETE ='REQUEST_PROJECT_DELETE';

 export const REQUEST_SKILL_CREATE ='REQUEST_SKILL_CREATE';
 export const REQUEST_SKILL_EDIT ='REQUEST_SKILL_EDIT';
 export const REQUEST_SKILL_DELETE ='REQUEST_SKILL_DELETE';

 export const REQUEST_TAG_CREATE ='REQUESTTAGL_CREATE';
 export const REQUEST_TAG_EDIT ='REQUEST_TAG_EDIT';
 export const REQUEST_TAG_DELETE ='REQUEST_TAG_DELETE';


 export const REQUEST_TAGS_PENDING ='REQUEST_TAGS_PENDING';
 export const REQUEST_TAGS_SUCCESS ='REQUEST_TAGS_SUCCESS';
 export const REQUEST_TAGS_FAILED ='REQUEST_TAGS_FAILED';

 */