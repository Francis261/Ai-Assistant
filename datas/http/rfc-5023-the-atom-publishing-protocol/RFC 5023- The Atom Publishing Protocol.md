# The Atom Publishing Protocol

Source: https://devdocs.io/http/rfc5023

## 1. Introduction

## 2. Notational Conventions

### 2.1. XML-Related Conventions

#### 2.1.1. Referring to Information Items

#### 2.1.2. RELAX NG Schema

#### 2.1.3. Use of "xml:base" and "xml:lang"

## 3. Terminology

## 4. Protocol Model

### 4.1. Identity and Naming

### 4.2. Documents and Resource Classification

### 4.3. Control and Publishing

### 4.4. Client Implementation Considerations

## 5. Protocol Operations

### 5.1. Retrieving a Service Document

### 5.2. Listing Collection Members

### 5.3. Creating a Resource

### 5.4. Editing a Resource

#### 5.4.1. Retrieving a Resource

#### 5.4.2. Editing a Resource

#### 5.4.3. Deleting a Resource

### 5.5. Use of HTTP Response Codes

## 6. Protocol Documents

### 6.1. Document Types

### 6.2. Document Extensibility

## 7. Category Documents

### 7.1. Example

### 7.2. Element Definitions

#### 7.2.1. The "app:categories" Element

##### 7.2.1.1. Attributes of "app:categories"

## 8. Service Documents

### 8.1. Workspaces

### 8.2. Example

### 8.3. Element Definitions

#### 8.3.1. The "app:service" Element

#### 8.3.2. The "app:workspace" Element

##### 8.3.2.1. The "atom:title" Element

#### 8.3.3. The "app:collection" Element

##### 8.3.3.1. The "href" Attribute

##### 8.3.3.2. The "atom:title" Element

#### 8.3.4. The "app:accept" Element

#### 8.3.5. Usage in Atom Feed Documents

#### 8.3.6. The "app:categories" Element

## 9. Creating and Editing Resources

### 9.1. Member URIs

### 9.2. Creating Resources with POST

#### 9.2.1. Example

### 9.3. Editing Resources with PUT

### 9.4. Deleting Resources with DELETE

### 9.5. Caching and Entity Tags

#### 9.5.1. Example

### 9.6. Media Resources and Media Link Entries

#### 9.6.1. Examples

### 9.7. The Slug Header

#### 9.7.1. Slug Header Syntax

#### 9.7.2. Example

## 10. Listing Collections

### 10.1. Collection Partial Lists

### 10.2. The "app:edited" Element

## 11. Atom Format Link Relation Extensions

### 11.1. The "edit" Link Relation

### 11.2. The "edit-media" Link Relation

## 12. The Atom Format Type Parameter

### 12.1. The "type" parameter

#### 12.1.1. Conformance

## 13. Atom Publishing Controls

### 13.1. The "app:control" Element

#### 13.1.1. The "app:draft" Element

## 14. Securing the Atom Publishing Protocol

## 15. Security Considerations

### 15.1. Denial of Service

### 15.2. Replay Attacks

### 15.3. Spoofing Attacks

### 15.4. Linked Resources

### 15.5. Digital Signatures and Encryption

### 15.6. URIs and IRIs

### 15.7. Code Injection and Cross Site Scripting

## 16. IANA Considerations

### 16.1. Content-Type Registration for 'application/atomcat+xml'

### 16.2. Content-Type Registration for 'application/atomsvc+xml'

### 16.3. Header Field Registration for 'SLUG'

### 16.4. The Link Relation Registration "edit"

### 16.5. The Link Relation Registration "edit-media"

### 16.6. The Atom Format Media Type Parameter

## 17. References

### 17.1. Normative References

### 17.2. Informative References

## Appendix A. Contributors

## Appendix B. RELAX NG Compact Schema

© document authors. All rights reserved.
 https://datatracker.ietf.org/doc/html/rfc5023
