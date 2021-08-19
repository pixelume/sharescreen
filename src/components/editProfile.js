import React, {useContext} from 'react';
// import styled from 'styled-components/macro';
import LoadAnimation from '../styles/LoadAnimation';
import { H3, P } from './Layout';
import Modal from './Modal';
import PresenterRegistrationForm from './Forms/PresenterRegistrationForm/PresenterRegistrationForm';
import { Button } from '../styles/Buttons';
// import { gql, useQuery } from '@apollo/client';
// import { Context } from './RootElement';
import { LayoutContext } from './Layout/Layout';

// const GET_PRESENTER_BY_USER_ID = gql`
//   query getPresenterByUserId($userId: ID!) {
//     presenters(limit: 1, where: { User: { id: $userId } }) {
//       title
//       name
//       surname
//       fullName
//       email
//       phone
//       qualifications
//       institution
//       role
//       country
//       city
//       subjectMatter
//       industryMemberships
//       availableHours
//       biography
//       id
//       profileVerified
//       User {
//         id
//       }
//       profilePicture {
//         url
//       }
//     }
//   }
// `;

const EditProfile = ({ editData, presenterId, loading, error }) => {
  // const { user } = useContext(Context);
  // const userId = user ? user.user.id : null;
  const {editProfile, setEditProfile} = useContext(LayoutContext);
  // const { loading, error, data } = useQuery(GET_PRESENTER_BY_USER_ID, {
  //   variables: { userId },
  // });

  return (
    <>
      <Modal margin='20px 0px 0px' closeHandler={() => setEditProfile(false)}>
        {loading && <LoadAnimation />}
        {error && <P>Error</P>}
        {editData && (
          <>
            <H3
              style={{ padding: '0px 20px' }}
              textAlign='center'
              margin='auto auto 20px'
            >
              Edit Presenter Profile
            </H3>
            {/* <P style={{padding: '15px 20px'}}>We are constantly working on the platform and you will soon be able to edit your profile here. For the time being please contact us if you would like to make any edits.</P> */}
            {editProfile === 'edit' && (
              <PresenterRegistrationForm editData={editData}
                // editData={{
                //   name: data.presenters[0].name || '',
                //   surname: data.presenters[0].surname || '',
                //   title: data.presenters[0].title || '',
                //   email: data.presenters[0].email || '',
                //   phone: data.presenters[0].phone || '',
                //   country: data.presenters[0].country || '',
                //   city: data.presenters[0].city || '',
                //   qualifications: data.presenters[0].qualifications || null,
                //   institution: data.presenters[0].institution || '',
                //   role: data.presenters[0].role || '',
                //   biography: data.presenters[0].biography || '',
                //   subjectMatter: data.presenters[0].subjectMatter || null,
                //   industryMemberships:
                //     data.presenters[0].industryMemberships || null,
                //   availableHours: data.presenters[0].availableHours || '',
                // }}
                // presenterId={pData.id.slice(pData.id.indexOf('_') + 1)}
                // presenterId={data.presenters[0].id}
                presenterId={presenterId}
                setEditProfile={setEditProfile}
              />
            )}
            {editProfile === 'done' && (
              <>
                <P style={{ padding: '0px 30px', marginTop: 50 }}>
                  Profile Successfully Updated. Please note that the changes <span style={{fontWeight: 'bold', color: 'lightcoral'}}>will not be visible instantly</span>, but are pending review and
                  may take up to 24 hours to reflect on sharescreenafrica.org. We have also sent you an email to "email here" with your updated profile information so you may verify it.
                </P>
                <Button
                  type='button'
                  color='red'
                  onClick={() => setEditProfile(false)}
                >
                  Close
                </Button>
              </>
            )}
          </>
        )}
      </Modal>
    </>
  );
};

export default EditProfile;
