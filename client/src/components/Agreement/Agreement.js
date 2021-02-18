
import React, { useState } from "react";
import { Modal, Button } from "antd";

const Agreement = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setVisible(true)}>
                Agreement
      </Button>
            <Modal
                title="Agreement"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1000}
            >
                <p>
                    PATIENT/PARENT RIGHTS TO CONFIDENTIALITY Physicians who are covered
                    entities are required to give their patients written notice of their
                    privacy rights, and patients are expected to acknowledge receipt and
                    understanding of these rights. Informing patients of their rights to
                    have protected health information kept private (which only requires
                    acknowledgment that they have received and understood the information)
                    is distinct from obtaining authorization for disclosure of such
                    information. An authorization for release of information that is not
                    exempt by HIPAA is different from an informed consent to release
                    information for treatment, payment, and health care operations, which
                    are generally exempted by HIPAA.2 Authorization is written permission
                    from the legal guardian to use or disclose the child's protected
                    health information to another person, entity, health care
                    professional, or agency for purposes other than those not exempted
                    (eg, treatment, payment, and health care operations) by HIPAA rules or
                    state law. Authorization may be required when a physician is asked to
                    disclose or discuss a patient's protected health information in legal
                    proceedings. Authorization must include: a description of the
                    information used or disclosed; the person authorized to make the
                    disclosure; the person to whom the disclosure is made; an expiration
                    date; the risk of redisclosure once protected health information is
                    disclosed and no longer protected by HIPAA; and the purpose for which
                    the information is used or disclosed. If information regarding
                    substance abuse is involved, federal law requires additional
                    statements in the authorization as well as the signature of a minor
                    aged 16 years or older.
        </p>
            </Modal>
        </>
    );
};

export default Agreement;
