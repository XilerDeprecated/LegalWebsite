/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from 'react';

import Header from '../components/Header';
import TextContent from '../components/TextContent';

function TermsOfService() {
    return (
        <div id="TermsOfService">
            <Header />
            <TextContent
                text={
                    <div id="LicenseText">
                        <h1>Xiler Terms of Service (ToS)</h1>
                        <ol type="1">
                            <li>
                                <h3>Terms</h3>
                                <p>
                                    By accessing <a href="https://www.xiler.net">www.xiler.net</a>, (and all its services) you are agreeing
                                    to be bound by these terms of service, all applicable laws and regulations,
                                    and you agree that you are responsible for compliance with any applicable local laws.
                                    If you do not agree with any of these terms, you are prohibited from using or accessing
                                    this network (website and other services). The materials contained in this website are
                                    protected by applicable copyright and trademark law. Xiler its terms of service may change
                                    at any time without notice to our users ("users", "you"), by using this website and its services
                                    you are agreeing to be bound by the latest version of the terms of service.
                                    If you have any questions that relate to our terms of service,
                                    please contact us (<a href="https://contact.xiler.net">contact.xiler.net</a>).
                                </p>
                            </li>
                            <li>
                                <h3>Who can use Xiler and its services</h3>
                                <p>
                                    You may only use our products or services if you can form a binding contract with Xiler,
                                    and only in compliance with these terms of service and all applicable laws. When you create
                                    a Xiler account, you must provide us with accurate and complete information. Any use or access
                                    by anyone that is under the age of 13 is prohibited. If you open an account of behalf of a company,
                                    organization or other entity, then this entity includes you and that entity, and you represent
                                    and warrant that you are authorized to grant all permissions and licenses provided in these terms
                                    of service and bind the entity to these terms, and you agree to these terms on the entity its behalf.
                                    Some of our services/products may be software that is downloaded to your computed, phone, tablet or
                                    any other device. You are agreeing that we may automatically upgrade those products, and these terms
                                    of service will apply.
                                </p>
                            </li>
                            <li>
                                <h3>Use License</h3>
                                <p>
                                    Permission is granted to temporary download a copy of the provided materials (information or software)
                                    from Xiler its website and services for personal, non-commercial transitory viewing only. This is
                                    the grand of a licence, not a transfer of a title, and under this licence you may not:
                                </p>
                                <ol type="a">
                                    <li>modify or copy the materials;</li>
                                    <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                    <li>attempt decompile or reverse engineer any software contained on Xiler its website or any of its services;</li>
                                    <li>remove any copyright or other proprietary notations from the materials;</li>
                                    <li>transfer the materials to another person or "mirror" the materials on any other server;</li>
                                </ol>
                            </li>
                            <li>
                                <h3>Use of Xiler services</h3>
                                <p>By buying or using any of Xiler its services you agree to the terms of service and may not:</p>
                                <ol type="a">
                                    <li>interfere with Xiler or any Xiler authorized representative;</li>
                                    <li>use your Xiler service for any malicious actions, bring harm, and any other action that is not permitted by law</li>
                                    <li>leak or abuse any unintentional mistakes (bugs) that are found;</li>
                                </ol>
                                <p>
                                    If any of the previous statements are broken, your account may/will be terminated,
                                    and/or legal action will be taken. If any legal problems occur with the service Xiler will not be
                                    liable for those actions. By using any of the Xiler services you agree that you will report any bug
                                    related to our servers/services.
                                </p>
                            </li>
                            <li>
                                <h3>Limitations</h3>
                                <p>
                                    In no event shall Xiler or its suppliers be liable for any damages (including, without limitation,
                                    damages for loss of data or profit, or due to business interruption) arising out of the use or
                                    inability to use the materials or services on Xiler its website, even if Xiler or a Xiler authorized
                                    representative has been notified orally or in writing of the possibility of such damage.
                                </p>
                            </li>
                            <li>
                                <h3>Accuracy of materials</h3>
                                <p>
                                    The materials or services appearing on Xiler its website could include technical,
                                    typographical, or photographic errors. Xiler does not warrant that any of the materials
                                    on its website are accurate, complete or current. Xiler may make changes to the materials
                                    or servers at any time without notice. However Xiler does not make any commitment to update
                                    the materials.
                                </p>
                            </li>
                            <li>
                                <h3>Modifications</h3>
                                <p>
                                    Xiler may revise these terms of servers at any time without notice. By using this website
                                    you agree to be bound by the latest version of the terms of service.
                                </p>
                            </li>
                            <li>
                                <h3>Governing Law</h3>
                                <p>
                                    These terms and conditions are governed by and constructed in accordance with the laws
                                    of Belgium and you irrevocably submit to the exclusive jurisdiction of the courts in Belgium.
                                </p>
                            </li>
                            <li>
                                <h3>Disclaimer</h3>
                                <ol type="a">
                                    <li>
                                        Xiler or a Xiler authorized representative may terminate your account or access to
                                        this website or services at any time without any consequences, even if the reason for
                                        this may not break our terms of service;
                                    </li>
                                    <li>
                                        The materials on Xiler its website and any of its services are provided on an 'as is' basis.
                                        Xiler makes no warranties, expressed or implied, and hereby disclaims and negates all the other
                                        warranties including, without limitation, implied warranties or conditions or conditions of
                                        merchantability, fitness for a particular purpose, or non-infringement of intellectual property
                                        or other violation rights.
                                    </li>
                                    <li>
                                        Further, Xiler its website and any of its services don't warrant or make any representations
                                        concerning the accuracy, likely results or reliability of the use of the materials on its website
                                        or otherwise relation to such materials or on any sites linked to Xiler its website or any of its services.
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </div>
                }
            />
        </div>
    );
}

export default TermsOfService;